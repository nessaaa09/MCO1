// ============================================================
//  script.js — MCO 1 Interactions
//  Student: Shailyn B. Niedo | 3A - BSEMC
// ============================================================

/**
 * Toggle accordion open/close
 * @param {string} id - activity-item element ID
 */
function toggleAct(id) {
  const item = document.getElementById(id);
  if (item) item.classList.toggle('open');
}

/**
 * Switch tab inside an activity card
 * @param {Event}  e       - click event from the button
 * @param {string} actId   - activity-item element ID
 * @param {string} panel   - data-panel value to show
 */
function showTab(e, actId, panel) {
  const item = document.getElementById(actId);
  if (!item) return;

  // Update tab button states
  item.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  e.currentTarget.classList.add('active');

  // Show the matching panel, hide the rest
  item.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.dataset.panel === panel);
  });
}
