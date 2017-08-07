import { BootstrapModalPage } from './app.po';

describe('bootstrap-modal App', () => {
  let page: BootstrapModalPage;

  beforeEach(() => {
    page = new BootstrapModalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
