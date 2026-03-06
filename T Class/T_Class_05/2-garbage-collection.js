// Reachability - Objects are retained in memory while they are reachable.

let temp = {
    email: "gibberish@xyz.com",
    valid: "5", // minute
}

// after 5 minutes
temp = null;

// There's no way to access it no references to it.
// Garbage Collector will junk the data and free the memory.


const movie = {
    title: "Ghosted",
    release: 2023,
    production: "Apple TV",
};

function coStar(actor, actress){
    actor.coStart = actress;
    actress.coStart = actor;

    return {
        leading: actor,
        supporting: actress,
    };
}

movie.cast = coStar(
    {name: "Chris Evans", salary: 10_000_000},
    {name: "Ana de Armas", salary: 2_000_000},
);

console.log(movie);

movie.cast = null; // now movie.cast pointing nothing, coStar not reachable now.