export class CurrentTime {
    showTime(): void {
        const dateNew = new Date();
        const time: HTMLElement | null = document.querySelector('.time');
        if (time) {
            time.textContent = dateNew.toLocaleTimeString();
            setTimeout(this.showTime, 1000);
        }
    }
}

export default CurrentTime;
