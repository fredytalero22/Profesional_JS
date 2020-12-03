class AutoPause {
    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player){
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold //umbral
        })

        observer.observe(this.player.media)
    }

    handleIntersection(entries){
        const entry = entries[0]; //Elementos del contenedor
        
        if(entry.intersectionRatio < this.threshold){
            this.player.pause();
        }else{
            this.player.play();
        }
        console.log(entry);
    }
}

export default AutoPause;