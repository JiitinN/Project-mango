class Launch{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    fly(){
        this.launch.bodyA=null;
    }
}