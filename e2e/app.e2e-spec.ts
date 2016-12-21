import { MarketizerAffAppPage } from './app.po';

describe('marketizer-aff-app App', function() {
  let page: MarketizerAffAppPage;

  beforeEach(() => {
    page = new MarketizerAffAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
