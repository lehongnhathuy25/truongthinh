export default function PreviewAvatar() {
    const inputUpload = document.querySelector(".upload-image");
    let loadFile = function (event) {
        let image = document.querySelector(".preview-img img");
        image.src = URL.createObjectURL(event.target.files[0]);
        image.srcset = URL.createObjectURL(event.target.files[0]);
    };
    if (inputUpload) {
        inputUpload.addEventListener("change", loadFile);
    }

    const chose = document.querySelectorAll('.upfile');
    if (chose) {
        chose.forEach(item => {
            const ip = item.querySelector('input')
            const label = item.querySelector('.label-txt')
            ip.addEventListener('change', (e) => {
                const files = ip.files;
                for (const file of files) {
                    label.innerHTML = file.name
                }
            })
        })
    }
    const checklists = document.querySelector('.checklists')
    const checklist = document.querySelectorAll('.checklist')

    if (checklists) {
        checklists.addEventListener('click', () => {
            if (checklists.checked == true) {
                checklist.forEach(item => {
                    item.checked = true
                })
            } else {
                checklist.forEach(item => {
                    item.checked = false
                })
            }
        })
    }
}