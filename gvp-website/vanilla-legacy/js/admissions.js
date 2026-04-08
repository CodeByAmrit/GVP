/**
 * GVP Admission Form Logic
 * Handles real-time validation and submission simulation
 */

document.addEventListener('DOMContentLoaded', () => {
    const admissionForm = document.getElementById('admissionForm');
    const formStatus = document.getElementById('formStatus');

    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic Validation Check
            const name = document.getElementById('studentName').value;
            const phone = document.getElementById('phone').value;
            
            if (name.length < 3) {
                showStatus('Please enter a valid student name.', 'error');
                return;
            }

            if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
                showStatus('Please enter a valid 10-digit phone number.', 'error');
                return;
            }

            // Simulate Submission
            const submitBtn = admissionForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...`;
            lucide.createIcons();

            setTimeout(() => {
                showStatus('Inquiry submitted successfully! Our counselor will contact you within 24 hours.', 'success');
                admissionForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                lucide.createIcons();
            }, 1500);
        });
    }

    function showStatus(message, type) {
        formStatus.innerText = message;
        formStatus.classList.remove('hidden', 'text-red-500', 'text-green-500');
        
        if (type === 'error') {
            formStatus.classList.add('text-red-500');
        } else {
            formStatus.classList.add('text-green-500');
        }
    }
});
