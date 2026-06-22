export function renderQuoteForm() {
  return `
    <form id="quote-form" class="space-y-5">
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="first_name" class="mb-1.5 block text-sm font-medium text-ink">First Name</label>
          <input type="text" id="first_name" name="first_name" required class="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-ink shadow-sm transition focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20" />
        </div>
        <div>
          <label for="surname" class="mb-1.5 block text-sm font-medium text-ink">Last Name</label>
          <input type="text" id="surname" name="surname" required class="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-ink shadow-sm transition focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20" />
        </div>
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="your_email" class="mb-1.5 block text-sm font-medium text-ink">Email Address</label>
          <input type="email" id="your_email" name="your_email" required class="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-ink shadow-sm transition focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20" />
        </div>
        <div>
          <label for="telephone" class="mb-1.5 block text-sm font-medium text-ink">Telephone</label>
          <input type="tel" id="telephone" name="telephone" class="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-ink shadow-sm transition focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20" />
        </div>
      </div>
      <div>
        <label for="your_message" class="mb-1.5 block text-sm font-medium text-ink">Your Message</label>
        <textarea id="your_message" name="your_message" rows="4" class="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-ink shadow-sm transition focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"></textarea>
      </div>
      <button type="submit" class="inline-flex items-center rounded-lg bg-forest px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-dark">Submit Your Quote Request</button>
    </form>`
}

export function initQuoteForm() {
  const mount = document.getElementById('quote-form-mount')
  if (mount) mount.innerHTML = renderQuoteForm()

  document.getElementById('quote-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const body = [
      `Name: ${data.get('first_name')} ${data.get('surname')}`,
      `Email: ${data.get('your_email')}`,
      `Phone: ${data.get('telephone')}`,
      '',
      String(data.get('your_message') ?? ''),
    ].join('\n')
    window.location.href = `mailto:office@alderleaf.ca?subject=${encodeURIComponent('Quote Request from alderleaf.ca')}&body=${encodeURIComponent(body)}`
  })
}
