const job = document.querySelector(".job-card")

const jobs = document.querySelector('.jobs')
 // 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Developer Java , Python Developer
let arrJob = ['JavaScript Developer', 'Developer Java', 'Python Developer']
for(let i = 0; i < arrJob.length; i++) {
    const jobCopy = job.cloneNode(true)
    jobs.appendChild(jobCopy)
    const title = document.querySelector('.job-card-inner h3')
    title.innerText = arrJob[i]
    
}
 // 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const span = document.querySelector('span')
const allJob = document.querySelectorAll('.job-card')
span.innerHTML = allJob.length

// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const search = document.querySelector('#search')
search.addEventListener('keyup', function(){
    let input = this.value;
    Array.from(allJob).forEach(job => {
        const titleJob = job.querySelector('h3').innerText
        if(titleJob.toLowerCase().includes(input.toLowerCase())){
            job.style.display = 'block'
        }else {
            job.style.display = 'none'

        }
    })
})

 // 5. Bấm vào Nút "All jobs" để reset ô tìm kiếm và hiển thị ra tất cả các công việc
 const showAll = document.querySelector('#show-all')
 showAll.addEventListener('click', function(){
     search.value = ""
     Array.from(allJob).forEach(job => {
         job.style.display = 'block'
     })
 })