document.getElementById("pokemon-name").innerText = "Pokémon";
const character = document.getElementById("search-button");
character.addEventListener("click", getPokData);

async function getPokData() {

   try {
          const searchName = document.getElementById("search-input").value.toLowerCase();
          document.getElementById("search-input").value = "";
          if (searchName === "") {
             alert("Please type your Pokémon name");

           } else if (!searchName) {
                    alert("Pokémon not found");
                } else {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}`)

                                 if(!res.ok) {
                                        throw new Error("Pokémon not found");
                                    }
                                                                                   
                    const data = await res.json();
                    document.getElementById("pokemon-name").innerText = data.name.toUpperCase();
                    document.getElementById("sprite").style.display = "block";

                    const id = `#${data.id}`;
                                                                                                                      const weight = `Weight: ${data.weight}`;
                                                                                                                             const height = `Height: ${data.height}`;

                                                                                                                             types.innerHTML = data.types.map((obj) => `<div class="type ${obj.type.name}">${obj.type.name}</div>`).join('');
                                                                                                                                    document.getElementById("types").style.display = "flex";
                                                                                                                                           const hp = data.stats[0].base_stat;
                                                                                                                                                  const attack = data.stats[1].base_stat;
                                                                                                                                                         const defense = data.stats[2].base_stat;
                                                                                                                                                                const spAttack = data.stats[3].base_stat;
                                                                                                                                                                       const spDefense = data.stats[4].base_stat;
                                                                                                                                                                              const speed = data.stats[5].base_stat;

                                                                                                                                                                                     const sprite = data.sprites.front_default;
                                                                                                                                                                                            const imgOnDisp = document.getElementById("sprite");
                                                                                                                                                                                                   imgOnDisp.src = sprite;

                                                                                                                                                                                                          const ids = document.getElementById("pokemon-id");
                                                                                                                                                                                                                 ids.textContent = id;

                                                                                                                                                                                                                        const weights = document.getElementById("weight");
                                                                                                                                                                                                                               weights.textContent = weight;

                                                                                                                                                                                                                                      const heights = document.getElementById("height");
                                                                                                                                                                                                                                             heights.textContent = height;

                                                                                                                                                                                                                                                   const hps = document.getElementById("hp");
                                                                                                                                                                                                                                                         hps.textContent = hp;

                                                                                                                                                                                                                                                               const attacks = document.getElementById("attack");
                                                                                                                                                                                                                                                                    attacks.textContent = attack;
                                                                                                                                                                                                                                                                          const defenses = document.getElementById("defense"); 
                                                                                                                                                                                                                                                                                defenses.textContent = defense;

                                                                                                                                                                                                                                                                                      const specialAttack = document.getElementById("special-attack");
                                                                                                                                                                                                                                                                                            specialAttack.textContent = spAttack;

                                                                                                                                                                                                                                                                                                  const specialDefense = document.getElementById("special-defense");
                                                                                                                                                                                                                                                                                                        specialDefense.textContent = spDefense;
                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                    const speeds =document.getElementById("speed");
                                                                                                                                                                                                                                                                                                                          speeds.textContent = speed;
                                                                                                                                                                                                                                                                                                                                 }
                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                                                                 catch (err) {
                                                                                                                                                                                                                                                                                                                                                      alert('Pokémon not found');
                                                                                                                                                                                                                                                                                                                                                         }
                                                                                                                                                                                                                                                                                                                                                         }