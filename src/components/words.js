import countWords from '../utils/countWords.js';

const str = `But this is only one view of Trump. The 74 million Americans who voted to reward him with a second term saw him as a leader who voiced their anger at political, business and media elites. Trump channeled their belief that an increasingly diverse and socially liberal nation threatened their values, religion, gun rights and cultural heritage. His exit could trigger volatile political forces among a community that will mourn his White House. The continued devotion of Trump's loyal base voters means that while Biden can wipe out many of the outgoing President's policy wins, removing his influence from politics may well be impossible.
As he moves into retirement, Trump's presidency will personify the divides between two halves of a populace -- one largely conservative and rural and the other more liberal, suburban and city-dwelling. The two increasingly lack a common cultural language and definition of patriotism -- and thanks to Trump and the media propagandists who sustained his personality cult, even a common version of truth. Trump's political career began with outrageous lies and a conspiracy theory over former President Barack Obama's birthplace. It is ending, at least for now, with another even more outrageous one: the false claim that he won an election he clearly lost. Trump's perpetuating of this alternative reality has caused catastrophic damage to faith in government that is the bedrock of any functioning nation. His shattering of the tradition of peaceful US transfers of power threatens to suffocate Biden's legitimacy and prolong the nation's agony at a time of dire crises.
After his final White House departure on Wednesday, Trump's Marine One will fly over miles of iron fencing and troops protecting the US Capitol from a repeat of the mob insurrection he enlisted and inspired. There could not be a better metaphor for his assault on American democracy.
Biden's inaugural celebrations will also be muted by the never worse pandemic that was fueled by presidential neglect. Nearly 400,000 Americans, many whose deaths could have been prevented, are dead on Trump's watch. Like his election sedition, Trump's denial over Covid-19 was rooted in an incessant focus on his own political needs rather than his oath to faithfully execute the office of the presidency he swore in January 2017.
The President's premature push to reopen the country in the service of his reelection campaign last summer helped spark a murderous second wave of the virus. Future generations will understand his contempt for science through his barely believable public pondering about whether ingesting disinfectant could cure Covid-19.
A desire to promote his own interests was also reflected in the outgoing President's attempts to funnel cash and publicity toward his worldwide real estate and hotel empire. This was highlighted by his abortive effort to host the G7 summit at his struggling Doral golf resort in Florida. In many ways, Trump attitude to the presidency was the exact inverse of President John Kennedy's inaugural admonishment to his fellow citizens: "Ask not what your country can do for you, ask what you can do for your country."`;

const countMap = countWords(str);

const words = [];

for (const [text, value] of Object.entries(countMap)) {
  words.push({
    text,
    value,
  });
}

export default words;
