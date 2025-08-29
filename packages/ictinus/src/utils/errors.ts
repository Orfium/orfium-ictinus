export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class PropsValidationError extends ValidationError {
  constructor(message: string) {
    super(message);
    this.name = 'PropsValidationError';
  }
}
