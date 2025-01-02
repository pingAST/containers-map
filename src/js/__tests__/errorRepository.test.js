import ErrorRepository from '../errorRepository';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test.each([
    [400, 'Bad Request'],
    [401, 'Unauthorized'],
    [403, 'Forbidden'],
    [404, 'Not Found'],
    [500, 'Internal Server Error'],
  ])('should return %s for code %i', (code, expected) => {
    expect(errorRepo.translate(code)).toBe(expected);
  });

  test('should return "Unknown error" for an unknown error code', () => {
    expect(errorRepo.translate(999)).toBe('Unknown error');
  });
});
