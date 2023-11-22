// **Tower of Hanoi:**

// - Explain the Tower of Hanoi problem and how it can be solved using recursion and a stack.

class TowerOfHanoi{
    solveIteratively(numberOfDisks:number , Source:string , Helper:string , Destination:string){

        if(numberOfDisks === 1){
            console.log(`Move disk ${numberOfDisks} from ${Source} to ${Destination}`);
            return;
        }

        this.solveIteratively(numberOfDisks-1 , Source , Destination , Helper);
        console.log(`Move disk ${numberOfDisks} from ${Source} to ${Destination}`);

        this.solveIteratively(numberOfDisks-1 , Helper , Source , Destination);

    }

}

let towerOfHanoi = new TowerOfHanoi();
towerOfHanoi.solveIteratively(64
     , 'Source' , 'Helper' , 'Destination');