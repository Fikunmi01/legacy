import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  // constructor() {}

  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  buttonText = 'Submit';

  // Your actual EmailJS credentials
  private readonly EMAIL_SERVICE_ID = 'service_zhhta1n';
  private readonly EMAIL_TEMPLATE_ID = 'template_51ne6mm';
  private readonly EMAIL_PUBLIC_KEY = '1t4YIpkDOJwTY6du6';

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.phoneValidator]],
      comment: [''],
    });
    // Initialize EmailJS
    emailjs.init(this.EMAIL_PUBLIC_KEY);
  }


  phoneValidator(control: any) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (
      control.value &&
      !phoneRegex.test(control.value.replace(/[\s\-\(\)]/g, ''))
    ) {
      return { invalidPhone: true };
    }
    return null;
  }

  onPhoneKeyPress(event: KeyboardEvent): boolean {
    const allowedChars = /[0-9\+\-\(\)\s]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!allowedChars.test(inputChar)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['required']) {
        return `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`;
      }
      if (field.errors['minlength']) {
        return `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } must be at least ${
          field.errors['minlength'].requiredLength
        } characters`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['invalidPhone']) {
        return 'Please enter a valid phone number';
      }
    }
    return '';
  }

  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      // Set loading state
      this.isSubmitting = true;
      this.buttonText = 'Sending...';
      this.submitMessage = '';

      try {
        const formData = this.contactForm.value;

        // Prepare email template parameters
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.comment || 'No message provided',
          to_email: 'contact@legacylifeassure.com',
        };

        // Send email using EmailJS
        const response = await emailjs.send(
          this.EMAIL_SERVICE_ID,
          this.EMAIL_TEMPLATE_ID,
          templateParams
        );

        console.log('Email sent successfully:', response);

        // Show success state
        this.buttonText = '✓ Sent Successfully!';
        this.submitMessage =
          'Thank you! Your message has been sent successfully.';

        // Wait 2 seconds to show success state
        setTimeout(() => {
          this.contactForm.reset();
          this.buttonText = 'Submit';
        }, 2000);
      } catch (error) {
        console.error('Email sending failed:', error);
        this.buttonText = '✗ Failed - Try Again';
        this.submitMessage =
          'Sorry, there was an error sending your message. Please try again.';

        // Reset button after 3 seconds on error
        setTimeout(() => {
          this.buttonText = 'Submit';
        }, 3000);
      } finally {
        this.isSubmitting = false;

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
