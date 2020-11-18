const Quiz = artifacts.require('Quiz');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;

contract('Quiz BDD Test Suite', (accounts) => {
  const [
    professor,
    student1,
    student2,
    badStudent1,
  ] = accounts;
  describe('Deployment', () => {
    it('should belongs to the right owner', () => {
      return Quiz.deployed()
        .then((instance) => instance.owner())
        .then((registeredOwner) => {
          expect(registeredOwner).to.eq(professor);
        });
    });
  });
  describe('Operative', () => {
    let quiz;
    before(async() => {
      quiz = await Quiz.new();
    });
    it('should allow the owner to create a session using a code', () => {
      return quiz.createSession('ABC')
        .then((result) => {
          expect(result.tx).to.match(/0x[a-fA-F0-9]{64}/);
          return quiz.getSession('ABC');
        })
        .then((response) => {
          expect(response).to.eq('ABC');
        });
    });
    it('should allow the owner to add a question into a given session');
  });
});
