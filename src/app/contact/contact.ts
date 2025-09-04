import { Component, HostListener } from '@angular/core';
import { LucideAngularModule, MapPin } from 'lucide-angular';
import { createClient } from '@formspree/core';
import { FormsModule } from '@angular/forms';
import {  SubmissionResult, SubmissionSuccess } from '@formspree/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule,FormsModule,NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  locationIcon = MapPin
    @HostListener('window:scroll', [])
  onScroll() {
    this.checkReveal();
  }

  private checkReveal() {
    const reveals = document.querySelectorAll('.al',);
    const windowHeight = window.innerHeight;

    reveals.forEach((el: Element) => {
    const rect = el.getBoundingClientRect();

    // if element enters viewport
    if (rect.top < windowHeight - 100) {
      el.classList.add('active');
    } else {
      // optional: remove when it leaves
      el.classList.remove('active');
    }
  });
  }
 private client = createClient({});
  submitting = false;
  success = false;
  error = false;

  async handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    this.submitting = true;
    this.success = false;
    this.error = false;

    try {
      const result: SubmissionResult = await this.client.submitForm('YOUR_FORM_ID', data);

      if ('body' in result) {
        // success
        this.success = true;
        form.reset();
      } else {
        // error
        this.error = true;
        console.error(result);
      }
    } catch (err) {
      this.error = true;
      console.error(err);
    } finally {
      this.submitting = false;
    }
  }

}
