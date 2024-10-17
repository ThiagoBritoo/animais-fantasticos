export default function initFuncionamento() {
  daysSince();

  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);

  const horarioSemana = document
    .querySelector("[data-horario]")
    .dataset.horario.split(",")
    .map(Number);

  const diaAgora = new Date().getDay();
  const horarioAgora = new Date().getHours();

  const semanaAberto = diasSemana.includes(diaAgora);
  const horaAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horaAberto) {
    funcionamento.classList.add("aberto");
  }
}

function daysSince() {
  const futuro = new Date();
  const agora = new Date("Sep 26 2024");

  const tempoDecorrido = ((futuro - agora) / (24 * 60 * 60 * 1000)).toFixed(0);

  console.log(
    `Fazem: ${tempoDecorrido} dias, que esse codigo foi escrito. hello future me!`
  );
}
