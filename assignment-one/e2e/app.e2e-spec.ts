import { AssignmentOnePage } from './app.po';

describe('assignment-one App', () => {
  let page: AssignmentOnePage;

  beforeEach(() => {
    page = new AssignmentOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
