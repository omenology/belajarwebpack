import './hello-world-button.css';
import cssModule from './hello.module.css'

class HelloWorldButton {
    classnameColor = cssModule.color
    
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        button.classList.add('hello-world-button');
        const body = document.querySelector('body');
        button.onclick =  () => {
            console.log(this.classnameColor )
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add(this.classnameColor);
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;
