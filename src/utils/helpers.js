// Various helper functions

export const scoreCssClass = (score) => {
    return score !== null ? 'score-' + score % Math.ceil(score / 10) * 10 : 'score-0';
}
