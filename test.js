const { expect } = require('chai');
const ZittiAssistant = require('./assistant');

describe('Zitti Assistant', () => {
  describe('Command Handling', () => {
    it('should respond to a greeting command', () => {
      const response = ZittiAssistant.respondToCommand('Hey. How are you?');
      expect(response).to.equal('Hello, I am doing great.');
    });

    it('should respond to a clean room command', () => {
      const response = ZittiAssistant.respondToCommand('Clean my room');
      expect(response).to.include('Room is cleaned');
    });

    it('should respond to a fetch newspaper command', () => {
      const response = ZittiAssistant.respondToCommand('Fetch the newspaper');
      expect(response).to.equal('Here is your newspaper');
    });

    it('should respond to an add item to shopping list command', () => {
      const response = ZittiAssistant.respondToCommand('Add Bread to my shopping list');
      const expected = 'Bread added to your shopping list'
      expect(response).to.equal(expected.toLowerCase());
    });

    it('should respond to a read shopping list command', () => {
      const response = ZittiAssistant.respondToCommand('Read my shopping list');
      expect(response).to.include('Here is your shopping list');
    });

    it('should handle unknown commands', () => {
      const response = ZittiAssistant.respondToCommand('How much is 5 + 2?');
      expect(response).to.equal('Hmm.. I don\'t know that');
    });
  });
});
