import { BookClubPage } from './app.po';

describe('book-club App', () => {
  let page: BookClubPage;

  beforeEach(() => {
    page = new BookClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
