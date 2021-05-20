import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

export default function PlayerForm({ onAddPlayer }) {
  const initialPlayerState = {
    name: '',
    price: '',
    free_transfer: false,
    club: '',
    position: '',
    email: '',
    skills: '' // NEU
  };

  const [player, setPlayer] = useState(initialPlayerState);
  const [tag, setTag] = useState(''); // NEU
  const [skills, setSkills] = useState([]); // NEU
  const [Error, setError] = useState(false);

  const validateName = (player) => player.name.length >= 2;
  const validateEMail = (player) =>
    (player.email.includes('@') && player.email.endsWith('.com')) ||
    player.email.endsWith('.de');
  const validatePrice = (player) =>
    (player.price > 0 && !player.free_transfer) || player.free_transfer;

  // useEffect: wenn sich skills aktualisiert, aktualisiert sich automatisch auch player
  useEffect(() => {
    setPlayer({ ...player, skills: skills });
  }, [skills]);
  // Fehlermeldung in der Console: useEffect hat missing dependency?

  function updatePlayer(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    if (event.target.type === 'checkbox') {
      fieldValue = event.target.checked;
    }
    //   wir brauchen if weil checkbox standardmäßig keinen Wert übermittelt wenn sie nicht geklickt wird
    //   hier wird definiert, dass sie auf jeden Fall einen Wert übermittelt
    // und zwar den Zustand der checkbox (checked oder nicht)

    setPlayer({ ...player, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      validateName(player) &&
      validateEMail(player) &&
      validatePrice(player)
    ) {
      onAddPlayer(player);
      setError(false);
    } else {
      setError(true);
    }
    //console.log(player);
  }

  // ______________ TAGS

  // wird ausgeführt bei jedem Tastenanschlag
  function handleChange(event) {
    setTag(event.target.value);
  }

  // wird ausgeführt bei Enter
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      updateSkills(tag);
      setTag('');
    }
  }

  // wird bei Enter in der Funktion handleKeyDown ausgeführt
  function updateSkills(newSkill) {
    setSkills([...skills, newSkill.toUpperCase()]);
    // setPlayer({ ...player, skills: skills });
    // >>> geht nicht weil skills erst nach Durchlaufen der Funktion updateSkills aktualisiert wird
  }

  return (
    <Formular onSubmit={handleFormSubmit}>
      {Error && <ErrorBox>HALT STOP, SO NICHT!</ErrorBox>}

      <label htmlFor="name">Player Name</label>
      <input
        type="text"
        name="name"
        onChange={updatePlayer}
        value={player.name} //vorbelegt falls es Wert gibt
        // value ist nicht das was im Browser steht, sondern das was im State gespeichert ist
        // deswegen kann man kleine Buchstaben tippen, State manipulieren sodass sofort Großbuchstaben angezeigt werden
      />

      <label htmlFor="price">Transfer Price (in €)</label>
      <input
        type="name"
        name="price"
        onChange={updatePlayer}
        value={player.price} //vorbelegt falls es Wert gibt
        disabled={player.free_transfer}
        //wenn die checkbox free_transfer checked (true) ist, ist disabled true
      />
      <label>
        <input
          type="checkbox"
          name="free_transfer"
          onChange={updatePlayer}
          value={player.free_transfer}
          disabled={player.price !== ''}
          checked={player.free_transfer}
          // disabled wenn ein Preis eingegeben wurde, also kein leerer String ist
        />
        <span>Free transfer?</span>
      </label>

      <label htmlFor="club">Club</label>
      <select name="club" id="club" onChange={updatePlayer} value={player.club}>
        <option value="">Please select</option>
        <option value="fc_bayern">FC Bayern</option>
        <option value="sv_werder">SV Werder Bremen</option>
        <option value="vfb_stuttgart">VFB Stuttgart</option>
        <option value="rb_leipzig">RB Leipzig</option>
        <option value="hansa_rostock">Hansa Rostock</option>
        <option value="eintracht_frankfurt">Eintracht Frankfurt</option>
        <option value="fc_st_pauli">FC St. Pauli</option>
      </select>

      <fieldset>
        <legend>Position</legend>
        <label>
          <input
            type="radio"
            name="position"
            value="striker"
            onChange={updatePlayer}
            checked={player.position === 'striker'}
          />
          Striker
        </label>

        <label htmlFor="">
          <input
            type="radio"
            name="position"
            value="midfield"
            onChange={updatePlayer}
            checked={player.position === 'midfield'}
          />
          Midfield
        </label>

        <label htmlFor="">
          <input
            type="radio"
            name="position"
            value="defence"
            onChange={updatePlayer}
            checked={player.position === 'defence'}
          />
          Defence
        </label>

        <label htmlFor="">
          <input
            type="radio"
            name="position"
            value="goalie"
            onChange={updatePlayer}
            checked={player.position === 'goalie'}
          />
          Goalie
        </label>
      </fieldset>
      <label htmlFor="email">Contact Email</label>
      <input
        type="text"
        name="email"
        onChange={updatePlayer}
        value={player.email}
      />

      <Skills>
        <label htmlFor="tag">Player Skills</label>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <span key={index + skill}>{skill}</span>
          ))}
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </SkillsContainer>
      </Skills>

      <Button isPrimary>Add</Button>
      <Button type="reset" onClick={() => setPlayer(initialPlayerState)}>
        Cancel
      </Button>
    </Formular>
  );
}

const Formular = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: 0 auto;
  max-width: 25rem;
  label,
  legend {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
  legend {
    margin-bottom: 0.5rem;
    padding: 0;
  }
  input,
  select {
    padding: 0.5rem;
    margin-bottom: 0.3rem;
  }
  fieldset {
    border: none;
    display: flex;
    gap: 0.4rem;
    padding: 0;
    margin: 0;
  }
  fieldset > label {
    font-weight: normal;
  }
  input[type='radio'],
  input[type='checkbox'] {
    transform: scale(1.5);
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 1.5rem;
  border-radius: 0.4rem;
  border: none;
  background: ${(props) => (props.isPrimary ? 'hotpink' : 'grey')};
  cursor: pointer;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  font-size: 1.2rem;
`;

const Skills = styled.section`
  display: grid;
  gap: 0.4rem;
  font-family: sans-serif;
`;

const SkillsContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  border: 2px black solid;

  span {
    background: deepskyblue;
    color: ivory;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin: 0.1rem;
  }

  input {
    padding: 0.5rem;
  }
`;

const ErrorBox = styled.div`
  background: red;
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  font-weight: bold;
`;
