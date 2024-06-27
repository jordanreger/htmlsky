export default class Page {
  protected page: string = "";

  appendHTML (html: string) {
    this.page += html;
  }

  showPage (): string {
    return this.page;
  }

  generateStart(handle: string) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light dark">
        <title>${handle}</title>
      </head>
    `;
  }

  generateEnd() {
    return `</html>`
  }
}
