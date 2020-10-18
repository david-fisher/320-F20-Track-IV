const router = require('express').Router();
const { isAuthenticated } = require('../auth');

router.get('/', isAuthenticated, (req, res) => {
  const { instructor_id } = req.body;
  /*
    TODO: return dashboard main page

    - path parameter
    * instructor_id: UID of instructor of a dashboard
  */
  res.status(202);
  res.json({
    success: true,
    drafts: [], // simulations
    open: [], // simulations
    closed: [], // simulations
  });
});

router.delete('/simulation/:simulation_id', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  /*
    TODO: remove saved simulation

    - path parameter
    * simulation_id: UID of simulation to be removed.
  */
  res.status(202);
  res.json({
    success: true,
  });
});

router.post('/simulation/:simulation_id/start', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { available_to } = req.body;
  /*
    TODO: start and open a simulation

    - path parameter
    * simulation_id: UID of simulation to be opened.

    - request body
    * available_to: UID of students who can access the simulation.
  */
  res.status(202);
  res.json({
    success: true,
  });
});

router.post('/simulation/:simulation_id/close', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  /*
    TODO: close a simulation

    - path parameter
    * simulation_id: UID of simulation to be closed.
  */
  res.status(202);
  res.json({
    success: true,
  });
});

module.exports = router;
