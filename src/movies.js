// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergArray = moviesArray.filter(
    movie =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const movieScores = moviesArray.map(movie => movie.score);
  const filteredMoviScores = movieScores.filter(
    score => typeof score === 'number'
  );
  const sumScore = filteredMoviScores.reduce((x, y) => x + y, 0);
  const avgScore = sumScore / movieScores.length;
  return Math.round(avgScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArray = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyArray = [...moviesArray];
  copyArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return copyArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleArray = moviesArray.map(movie => movie.title);
  const copyArray = [...titleArray];
  copyArray.sort((a, b) => a.localeCompare(b));
  if (copyArray.length > 20) {
    return copyArray.slice(0, 20);
  } else {
    return copyArray;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
/* function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map(movie => {
    const timeString = movie.duration;
    const match = timeString.match(/(\d+)h (\d+)min/);
    const hours = parseInt(match[1], 10) * 60;
    const minutes = parseInt(match[2], 10);
    return (movie.duration = hours + minutes);
  });

  return newMoviesArray;
} */

function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map(movie => {
    const timeString = movie.duration;
    const match = timeString.match(/(\d+)h(?: (\d+)min)?/);
    const hours = parseInt(match[1], 10) * 60;
    if (match[2]) {
      minutes = parseInt(match[2], 10);
    } else {
      minutes = 0;
    }

    return {
      ...movie,
      duration: hours + minutes,
    };
  });

  return newMoviesArray;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
