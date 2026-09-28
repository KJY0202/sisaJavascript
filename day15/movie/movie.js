const seatList = document.querySelector(".seatList");
const selectedSeats = document.querySelector("#selectedSeats");
const totalPrice = document.querySelector("#totalPrice");
const movieSelect = document.querySelector("#movieSelect");
const reserveButton = document.querySelector("#reserveButton");
const message = document.querySelector("#message");

const rows = ["A", "B", "C", "D", "E"];
const seatsPerRow = 6;
const reservedSeatNames = ["A3", "B2", "C5", "D1", "E6"];
const chosenSeats = new Set();

rows.forEach((row) => {
  for (let number = 1; number <= seatsPerRow; number += 1) {
    const seatName = `${row}${number}`;
    const seat = document.createElement("button");
    seat.type = "button";
    seat.className = "seat";
    seat.textContent = seatName;
    seat.dataset.seat = seatName;

    if (reservedSeatNames.includes(seatName)) {
      seat.classList.add("reserved");
      seat.disabled = true;
      seat.setAttribute("aria-label", `${seatName} 예약 완료`);
    } else {
      seat.setAttribute("aria-label", `${seatName} 선택 가능`);
      seat.addEventListener("click", () => toggleSeat(seat));
    }

    seatList.append(seat);
  }
});

function toggleSeat(seat) {
  const seatName = seat.dataset.seat;

  if (chosenSeats.has(seatName)) {
    chosenSeats.delete(seatName);
    seat.classList.remove("selected");
    seat.setAttribute("aria-label", `${seatName} 선택 가능`);
  } else {
    chosenSeats.add(seatName);
    seat.classList.add("selected");
    seat.setAttribute("aria-label", `${seatName} 선택됨`);
  }

  updateSummary();
}

function updateSummary() {
  const seats = [...chosenSeats].sort();
  const price = Number(movieSelect.value) * seats.length;

  selectedSeats.textContent = seats.length ? seats.join(", ") : "없음";
  totalPrice.textContent = `${price.toLocaleString("ko-KR")}원`;
  reserveButton.disabled = seats.length === 0;
}

movieSelect.addEventListener("change", updateSummary);

reserveButton.addEventListener("click", () => {
  const seats = [...chosenSeats].sort();

  seats.forEach((seatName) => {
    const seat = document.querySelector(`[data-seat="${seatName}"]`);
    seat.classList.remove("selected");
    seat.classList.add("reserved");
    seat.disabled = true;
    seat.setAttribute("aria-label", `${seatName} 예약 완료`);
  });

  message.textContent = `${seats.join(", ")} 좌석 예약이 완료되었습니다.`;
  chosenSeats.clear();
  updateSummary();
});
