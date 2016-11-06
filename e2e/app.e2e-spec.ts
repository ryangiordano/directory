import { CodigoDirectoryPage } from './app.po';

describe('codigo-directory App', function() {
  let page: CodigoDirectoryPage;

  beforeEach(() => {
    page = new CodigoDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
