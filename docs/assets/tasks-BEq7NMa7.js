import "./modulepreload-polyfill-DaKOjhqt.js";
/* empty css                */
import { l as loadObsAsJson, a as loadTasksAsJson } from "./csvtojson-CHK6WrLd.js";
document.addEventListener("DOMContentLoaded", async () => {
  const obsSubmissions = await loadObsAsJson();
  const taskSubmissions = await loadTasksAsJson();
  const list = document.getElementById("csv-list");
  const elements = [];
  obsSubmissions.forEach((row) => {
    const values = row.Interface_Elements.split(",").map((v) => v.trim());
    if (!values[0]) {
      return;
    }
    values.forEach((v) => {
      elements.push(v);
    });
  });
  taskSubmissions.forEach((row) => {
    elements.push(row.Tasks);
  });
  elements.sort();
  elements.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
  });
});
//# sourceMappingURL=tasks-BEq7NMa7.js.map
