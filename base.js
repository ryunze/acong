const dashboardCard = document.querySelector('.case-center .el-card.box-card.is-always-shadow');

if (dashboardCard != null) {
const dashboardCardToggle = document.createElement('div');
    dashboardCardToggle.setAttribute('class', 'dashboard-card-toggle');

    const dashboardCardImg = document.createElement('img');
    dashboardCardImg.src = 'https://www.svgrepo.com/show/380010/eye-password-show.svg';
    dashboardCardImg.setAttribute('width', '24');

    dashboardCardToggle.append(dashboardCardImg);
    dashboardCard.appendChild(dashboardCardToggle);

    dashboardCardToggle.addEventListener('click', function () {
        dashboardCard.querySelector('form').classList.toggle('d-block');
        dashboardCard.querySelector('div.footer').classList.toggle('d-flex');
    });
}
