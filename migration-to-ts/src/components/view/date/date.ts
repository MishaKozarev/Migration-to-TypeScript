export class CurrentDate {
    showDate(): void {
        const dateNew = new Date();
        const date: HTMLElement | null = document.querySelector('.date');
        const currentDate = dateNew.toLocaleDateString();
        if (date) {
            date.textContent = currentDate;
        }
    }
}

export default CurrentDate;
