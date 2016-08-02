var service = function(){
	return {name: 'service'};
};

var router = function(){
	return {name: 'router'};
};


injector.register('service', service);
injector.register('router', router);

var doSomething = injector.resolve(['service', 'router'], function(service, router, other) {
    console.log(service().name);
    console.log(router().name);
    console.log(other);
});
doSomething("Other");