const Contract = artifacts.require('Wallet');
contract('Wallet', function (accounts) {
    let contract;
    const sender = accounts[0];
    const participantA = accounts[0];
    const participantB = accounts[1];
    beforeEach(async () => {
        contract = await Contract.new(participantA, participantB, {
            from: sender
        });
    });

    it('should set the participantA address', async () => {
        const _participantA = await contract.participantA.call();
        assert.equal(participantA, _participantA);
    });

    it('should set the participantB address', async () => {
        const _participantB = await contract.participantB.call();
        assert.equal(participantB, _participantB);
    });
});