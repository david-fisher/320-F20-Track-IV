const router = require('express').Router();
const { isAuthenticated } = require('../auth');

router.post('/create', isAuthenticated, (req, res) => {
  const { simulation_name } = req.body;

  /*
    TODO: create a new simulation

    - request body
    * simulation_name: name for a new simulation
  */

  res.status(202);
  res.json({
    success: true,
    simulation_id: 1234567,
  });
});

router.put('/:simulation_id/introduction', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { description } = req.body;

  /*
    TODO: Add or update `introduction` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `introduction` is updated.

    - request body:
    * description: content of `introduction`
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put('/:simulation_id/project-task-assignment', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { description } = req.body;

  /*
    TODO: Add or update `project-task-assignment` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `project-task-assignment` is updated.

    - request body:
    * description: content of `project-task-assignment`
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put('/:simulation_id/initial-reflection', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { description, questions } = req.body;

  /*
    TODO: Add or update `initial-reflection` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `initial-reflection` is updated.

    - request body:
    * description: content of `initial-reflection`
    * questions: list of questions
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put('/:simulation_id/initial-action', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { description, choices } = req.body;

  /*
    TODO: Add or update `initial-action` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `initial-action` is updated.

    - request body:
    * description: content of `initial-action`
    * choices: list of choices
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put('/:simulation_id/stakeholders/description', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { description } = req.body;

  /*
    TODO: Add or update a summary for all of the stakeholders

    - path variable:
    * simulation_id: UID of simuluation whose a summary for all of the stakeholders is updated.

    - request body:
    * description: content of a summary for all of the stakeholders
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put('/:simulation_id/stakeholders', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { name, description, conversation_text } = req.body;

  /*
    TODO: Add or update `stakeholder-list` part of simulation

    - path variable:
    * simulation_id: UID of simuluation where a stakeholder is added or updated

    - request body:
    * name: name of a stakeholder
    * description: short description of a new stakeholder
    * conversation_text: content of conversation with a new stakeholder
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put('/:simulation_id/additional-reflection', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { description, questions } = req.body;

  /*
    TODO: Add or update `additional-reflection` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `additional-reflection` is updated.

    - request body:
    * description: content of `additional-reflection`
    * questions: list of questions
  */

  res.status(202);
  res.json({
    success: true,
  });
});

router.put('/:simulation_id/final-action', isAuthenticated, (req, res) => {
  const { simulation_id } = req.params;
  const { description, choices } = req.body;

  /*
    TODO: Add or update `final-action` part of simulation

    - path variable:
    * simulation_id: UID of simuluation whose `final-action` is updated.

    - request body:
    * description: content of `final-action`
    * choices: list of choices
  */

  res.status(202);
  res.json({
    success: true,
  });
});

module.exports = router;

/*
Add “project task assignment”
i)      POST /api/v1/simulation/project-task-assignment/update
ii)     Request
(1)   Simulation ID
(2)   HTML text for description String description
iii)   Response
(1)   Whether the description is added successfully
c)     Add “reflection on initial information”
i)      POST /api/v1/simulation/[simulation_id]/initial-reflection
ii)     Request
(1)   Simulation ID
(2)   description (HTML text for description)
(3)   A list of HTML tag IDs of text boxes for answers
iii)   Response
(1)   Whether the description and text boxes are added successfully
d)    Add “choose initial action”	
i)      PUT /api/v1/simulation/initial-action
ii)     Request
(1)   Simulation ID
(2)   HTML text for the description
(3)   A list of strings → tag IDs of choices
iii)   Response
See “Canonical Void Response”
e)    Add descriptions for the page of stakeholders
i)      PUT /api/v1/simulation/stakeholder-list
ii)     Request
(1)   Simulation ID
(2)   HTML text for description
iii)   Response
See “Canonical Void Response”
f)      Add a stakeholder
i)      PUT /api/v1/simulation/stakeholder
ii)     Request
(1)   Simulation ID
(2)   The name of a stakeholder
(3)   HTML text for a brief bio of the stakeholder
(4)   HTML text for a talk with the stakeholder
iii)   Response

{
  "stakeholder_id": Integer,
}

g)     Add “reflection on additional information”
i)      PUT /api/v1/simulation/additional-reflection
ii)     Request
(1)   Simulation ID
(2)   HTML text for description
(3)   A list of HTML tag IDs of text boxes for answers
iii)   Response
See “Canonical Void Response”
h)    Add “final decision"
i)      PUT /api/v1/simulation/final-decision
ii)     Request
(1)   Simulation ID
(2)   HTML text for the description
(3)   A list of HTML tag IDs of choices
iii)   Response
See “Canonical Void Response”
 */
