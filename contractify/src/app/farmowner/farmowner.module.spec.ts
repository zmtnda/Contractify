import { FarmownerModule } from './farmowner.module';

describe('FarmownerModule', () => {
  let farmownerModule: FarmownerModule;

  beforeEach(() => {
    farmownerModule = new FarmownerModule();
  });

  it('should create an instance', () => {
    expect(farmownerModule).toBeTruthy();
  });
});
