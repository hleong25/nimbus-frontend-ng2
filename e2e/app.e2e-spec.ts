import { NimbusFrontendNg2Page } from './app.po';

describe('nimbus-frontend-ng2 App', function() {
  let page: NimbusFrontendNg2Page;

  beforeEach(() => {
    page = new NimbusFrontendNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
