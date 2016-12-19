describe('Skill Factory', function(){

    var Skill;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('ui.ace'));
    beforeEach(angular.mock.module('eklabs.angularStarterPack'));

    // ---- Inject Default config for the test
    angular.module('eklabs.angularStarterPack')
        .constant('WEBAPP_CONFIG', {
            api         : 'http://91.134.241.60:3050/'
        });

    // Before each test set our injected Users factory (_Skill_) to our local User variable
    beforeEach(inject(function(_Skill_) {
        Skill = _Skill_;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function() {
        expect(Skill).toBeDefined();
    });

    // A set of tests for our Users.get() method
    describe('.get(id)', function() {
        // A simple test to verify the method all exists
        it('should exist', function() {
            expect(Skill.prototype.get).toBeDefined();
        });

        it('should return one user object if it exists',inject(function(Skill,$httpBackend){

            $httpBackend.expect('GET','http://91.134.241.60:3050/teamdr-skills/584daabbc4569917c0c47e4d')
                .respond(200,"{id : '584daabbc4569917c0c47e4d', type : 'Informatique', name : 'Manager' }");

            User.prototype.get('584daabbc4569917c0c47e4d').then(function(data){
                expect(data.id).not.toEqual(2);
            });
        }))


    });
});