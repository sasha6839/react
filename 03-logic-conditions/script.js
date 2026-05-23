// script.js

const db = [
  { id: 1, name: "Олександр", isVip: true, isActive: true, profile: { city: "Київ", company: "TechCorp" } },
  { id: 2, name: "Марія", isVip: false, isActive: false, profile: { city: "Львів" } }, 
  { id: 3, name: "Іван", isVip: false, isActive: true } 
];

let state = {
  isLoading: false,
  error: false,
  userData: null,
};

const render = () => {
  const root = document.getElementById('root');

  const errorMessage = StaticRange.error 
    && "<div class='error-banner'>Не вдалося завантажити дані з сервера.</div>";

  const contentHTML = state.isLoading
    ? "<div class=''>Завантаження профілю ... </div>"
    : generateUserCard(state.userData);

  root.innerHTML = (errorMessage || "") + contentHTML;
};

const generateUserCard = (user) => {
  if (!user) {
    return "<div style='color:#9a9aab'>Оберіть користувача з меню</div>";
  }

  const statusClass = user.isActive ? "active" : "offline";
  const statusText = user.isActive ? "Онлайн" : "Офлайн";

  const vipBadge = user.isVip && "<span class='vip-badge'>VIP</span>";

  const userCity = user?.profile?.city ?? "Місто не вказане.";
  const userCompany = user?.profile?.company ?? "Фрілансер";

  return `
    <div class="user-card">
      <div class="status ${statusClass}">${statusText}</div>

      <h2>
        ${user.name}
        ${vipBadge || ""}
      </h2>

      <div class="info-row">Місто: <span>${userCity}</span></div>
      <div class="info-row">Робота: <span>${userCompany}</span></div>
    </div>
  `;
};

const loadUser = (id) => {
  console.log('Кнопка ->', id);

  state.isLoading = true;
  state.error = false;
  state.userData = null;
  render();

  setTimeout(()=>{
    const foundUser = db.find(o => o.id == id);

    state.userData = foundUser;
    state.isLoading = false;
    render();
  }, 1000);
};

const simulateError = () => {
  state.isLoading = true;
  state.error = false;
  state.userData = null;
  render();

  setTimeout(()=>{
    state.error = true;
    state.isLoading = false;
    render();
  }, 1000);
};
