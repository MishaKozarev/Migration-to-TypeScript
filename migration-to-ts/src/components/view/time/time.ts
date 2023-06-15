export class CurrentTime {
    showTime(): void {
        const dateNew: Date = new Date();
        const time: HTMLElement | null = document.querySelector('.time');
        if (time) {
            time.textContent = dateNew.toLocaleTimeString();
            setInterval(this.showTime, 1000);
            console.log(time.textContent);
        }
    }
}

export default CurrentTime;
