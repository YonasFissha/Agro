import { AgroPage } from './app.po';

describe('agro App', function() {
  let page: AgroPage;

  beforeEach(() => {
    page = new AgroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
