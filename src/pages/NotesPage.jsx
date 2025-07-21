import React from "react";
import "../styles/Notes.css";

export default function NotesPage() {

  const fallacies = [
    "Straw Man",
    "False Dilemma",
    "False Cause",
    "Begging the Question",
    "Poisoning the Well",
    "Loaded Question",
    "Slippery Slope",
    "Ad Hominem",
    "Appeal to Authority",
    "Equivocation",
    "False Analogy",
    "Appeal to Emotion",
  ];

  return (
    <div className="notes-page-wrapper">
      <aside className="sidebar">
        <h2 className="sidebar-title"><a href={`#Introduction-1`}>Introduction</a></h2>
        <h2 className="sidebar-title">Fallacies</h2>
        <ul className="sidebar-list">
          {fallacies.map((title, idx) => (
            <li key={idx}>
              <a href={`#fallacy-${idx + 1}`}>{idx + 1}. {title}</a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="notes-content">
        <h1 className="home-title">
        <img src='./pencil.png'  alt="icon"width="28" height="28"  style={{ marginRight: '35px' }}/>
           Logical Fallacies Notes
           </h1>
        <section id="Introduction-1">
          <h2>Introduction</h2>
          <p>When we argue, we can be wrong for lots of reasons. We might have our facts wrong; 
            or we might be right about our facts, but wrong about what we've inferred from them.
            Often, we come out with statements that sound persuasive, 
            but that don't really hold together for lots of reasons. We use words carelessly, 
            we make assumptions that we don't investigate, and sometimes--let's be honest--we just want to win and 
            are willing to play a little dirty. We try to bully our listeners, or sneak an idea by them, or try to 
            make it hard for them to answer back.
            And sometimes, people use all these tricks on us. 
            We call these deceptive arguments "logical fallacies."</p>
            <div>
           <p> <b>Definition: Fallacies </b>are arguments that sound convincing but are essentially flawed; 
             they usually stem from careless thinking, 
            or more often, from an attempt to persuade through non-logical means.</p>
            </div>
            <div>
              <p>Here are some examples of fallacies</p>
              <ul>
                <li>Mayor Willie Brown wants to use all of your tax dollars 
                  to fund his cronies and laugh at the taxpayers of San Francisco.</li>
                <li>You can support Proposition L, or you can hand San Francisco over to rich, greedy landowners 
                    who will stop at nothing until all the artists and working people are evicted.</li>
                <li>You can support Proposition L, or you can hand San Francisco over to rich, 
                  greedy landowners who will stop at nothing until all the artists and working people are evicted.</li>
                <li>No way I'm voting for Diane Feinstein as senator. Years ago, when she took over as Mayor of San Francisco, 
                  the City had plenty of money. When she left a few years later, the City was in debt.</li>
                <li>This law is unwise because it isn't a good idea.</li>
                <li>No real New Yorker will vote for Hilary Clinton as New York senator.</li>
                <li>Do you think that Gore's pathetic incompetence will present a problem if he is elected?</li>
                <li>If Bush overturns Roe v. Wade, it'll just be a matter of time before women will be oppressed in other ways: 
                  no access to health care, or education, or work--it'll be like the 19th century.</li>
                <li>Senator Lieberman's arguments are convincing because he's a good man.</li>
                <li>Don't be fooled by Proposition M (more permits for taxicabs). 
                  My uncle, who runs a restaurant, says it's a terrible idea.</li>
                <li>We don't want prerequisites at College of San Mateo. Prerequisites prevent students gaining access to courses, 
                  and our whole mission is to give students access to education.</li>
                <li>If the state has the right to decide who may or may not own a car, 
                  it ought to have the right to decide who may have a baby--and issue licenses to people who are fit parents.</li>
              </ul>
            </div>
            <div>
           <p>Did any of those statements sound familiar? You might not remember the election or have cared about it. They are often provocative and bullying, the kind of argument that makes you say 
            "But....!!!" yet leaves you a bit uncertain as to how to argue against it.</p> 
            </div>
            <div>
              <p>These are specific patterns of deceptively convincing but false reasoning, called fallacies. 
                By looking precisely at the logic implied in the argument, you can often identify precisely what is wrong with it.</p>
            </div>
        </section>
        <section id="fallacy-1">
          <h2>1. Straw Man</h2>
          <p>The <b>“Straw Man”</b> fallacy involves making a caricature of your opponent’s views, 
            and then scoring points by opposing this caricature.</p>
          <ul>
            <li>Willie Brown wants to use all of your tax dollars to fund his cronies 
              and laugh at the taxpayers of San Francisco.</li>
          </ul>
          <div>
          <p>Whether or not you like or trust Willie Brown, the Mayor of San Francisco, 
          he doesn't literally plan to use all of our tax dollars to laugh at the City residents. 
          This statement creates an unfair and exaggerated target for the speaker to aim at.</p>
          </div>
          <ul>
            <li>My opponent is a milkshake hating extremist. 
              But not me. I have a Golden Retriever. [Courtesy of a Jack-in-the-Box parody!]</li>
            <li>Well, no doubt you like to live like a pig in a sty. 
              But perhaps I can explain why it's worth doing essential repairs on this house.</li>
          </ul>
        </section>

        <section id="fallacy-2">
          <h2>2. False Dilemma</h2>
          <p>The <b>“False Dilemma”</b> fallacy pretends that what may be a very complex situation can be resolved into two alternatives, 
            then forces you to choose.</p>
          <ul>
            <li>You can support Proposition L, or you can hand San Francisco over to rich, 
              greedy landowners who will stop at nothing until all the artists and working people are evicted.</li>
          </ul>
          <div>
            <p>Surely there's another alternative? Perhaps you don't support Prop L, 
              the no-growth proposition which bans development in certain districts in the City, 
              but that doesn't necessarily mean that you want to hand over the City to greedy landowners. 
              This assertion pretends that there are only two alternatives, 
              thus putting any opponent into the position of having to choose one or the other.</p>
            <ul>
              <li>We will have to cut back social services or go completely bankrupt.</li>
              <li>You can either dedicate yourself to karate, or just live on your couch eating chips.</li>
            </ul>
          </div>
        </section>

        <section id="fallacy-3">
          <h2>3. False Cause</h2>
          <p>The <b>“False Cause” </b> fallacy assumes, without proof, 
            that because two things happen together, one must have caused the other.</p>
          <ul>
            <li>No way I'm voting for Diane Feinstein. Years ago, when she took over as Mayor of San Francisco,
               the City had plenty of money. When she left a few years later, the City was in debt.</li>
          </ul>
          <div>
            <p>Diane Feinstein may have been the mayor during a period in which the City lost money. 
              But that doesn't mean that she caused the loss of money. 
              It's not enough to say that two things happened at the same time if you want to prove that one caused the other;
               you must also show actual cause.</p>
            <ul>
              <li>Since you entered the room half an hour ago, two light bulbs have blown out! What is it with you?</li>
              <li>Since divorce was made legal, marriages have been breaking up at an alarming rate--what's more, teen pregnancies, 
                drug use and delinquency have increased. Divorce is clearly a bad thing.</li>
            </ul>
          </div>
        </section>
        <section id="fallacy-4">
          <h2>4.Begging the Question</h2>
          <p>The <b>“Begging the Question”</b> fallacy looks like a reason is being offered for a position, 
            when in fact the position is merely restated.</p>
          <ul>
            <li>“This law is unwise because it’s not a good idea.”</li>
          </ul>
          <div>
            <p>The word "because" implies that the speaker is about to give some reasons for why the law is unwise: 
              examples of badly written sentences, for instance, or illustrations of how the law might backfire. 
              But instead the speaker just says again that it's unwise, this time in slightly different words.
               It's bad because it's bad because it's bad.</p>
            <ul>
              <li>The music is really enjoyable because it's pleasant to listen to.</li>
              <li>He is obnoxious because he's really annoying.</li>
            </ul>
          </div>
        </section>
        <section id="fallacy-5">
           <h2>5. Poisoning the Well</h2>
           <p>The <b>"Poisoning the Well"</b> fallacy sidetracks an argument 
             by putting potential opponents personally on the defensive.</p>
           <ul>
             <li>“No real New Yorker would vote for Clinton.”</li>
           </ul>
           <div>
             <p>It's almost silly to call this a logical fallacy, because there's nothing logical about this at all. 
               It's a very familiar bullying tactic. The speaker here makes an assertion about people
                who don't agree with him that puts any prospective disagreements on the defensive. 
                Now, instead of explaining why he is voting for Clinton, 
               anyone with a different view must first prove that he's a real New Yorker.</p>
           </div>
           <ul>
             <li>Any person with reasonably educated tastes can see that Hemingway is a great novelist.</li>
             <li>Only sexist pigs enjoy movies with Arnold Schwarzenegger.</li>
           </ul>
        </section>
        <section id="fallacy-6">
         <h2>6. Loaded Question</h2>
         <p>The <b>"Loaded Question"</b> fallacy sidetracks an argument by presenting someone with a question 
           whose premises he may not accept, 
           and which are probably damaging his position.</p>
         <ul>
           <li>Do you think that Gore's pathetic incompetence will present a problem if he is elected?</li>
         </ul>
         <div>
           <p>Closely related to "poisoning the well," this fallacy involves another, slightly subtler bullying tactic. 
             Again, the opponent is put on the defensive, but this time the accusation is embedded indirectly in a question. The speaker can't answer the question without accepting a premise he may want to reject (that Gore is pathetically incompetent). At the same time, if he challenges the question, he looks evasive. 
             You've seen this tactic used many times in arguments!</p>
         </div>
         <ul>
           <li>When did you stop beating your wife?</li>
           <li>How soon do you expect to implement your plans to destroy the economy?</li>
         </ul>
         </section>
         <section id="fallacy-7">
         <h2>7. Slippery Slope</h2>
         <p>The <b>"Slippery Slope"</b> fallacy infers extreme and dramatic consequences from a single cause, 
           usually by skipping over details of how the mountain will grow from the molehill.</p>
         <ul>
           <li>If Bush overturns Roe v. Wade, it'll just be a matter of time before women will be oppressed in all kinds of ways: 
             no access to healthcare, or education, or work--it'll be like the 19th century.</li>
         </ul>
         <div>
           <p>Well... hold on a moment! It's too easy to extrapolate dramatic consequences from a single event.
              We tend to exaggerate how far we can see consequences, and we shouldn't.</p>
         </div>
         <ul>
           <li>If we let this person shoplift without administering a severe punishment, 
             the next thing you know, everyone will shoplift; 
             stores will be forced to close down; there will be panic buying and total economic collapse.</li>
            <li>Today, marijuana is outlawed. Tomorrow it will be alcohol and cigarettes; eventually, 
              you and I will not be allowed legally to buy a cup of coffee without being arrested.</li>
         </ul>
         </section>
         <section id="fallacy-8">
          <h2>8. Ad Hominem (Personal Attack)</h2>
         <p>The <b>"Ad Hominem"</b> or <b>"Personal Attack"</b> fallacy rebuts a person's opinions with a statement (usually irrelevant) 
           about the person himself.</p>
         <ul>
           <li>Senator Lieberman's arguments are convincing because he's a good man.</li>
         </ul>
         <div>
           <p>That doesn't sound so bad. But look at the "because." 
             Here, the speaker seems again to be about to give the reasons why Lieberman's arguments are convincing. 
             But he doesn't; instead, he tells us why he likes Lieberman. If the sentence had read, 
             "Lieberman is believable because he's a good man," that would be fine. After all, good people do tend to be credible;
              honesty is one of the commonly accepted criteria of goodness. 
              But Lieberman's goodness doesn't give us a reason to be convinced by his arguments. Good people can be wrong. 
              This fallacy is also known as the "personal attack" fallacy, but as you can see, the key point is not that it's rude--this example is actually a compliment!
               --the key point is that the speaker tries to respond to a person's arguments with a statement about the person himself.
                "Ad hominem" is Latin meaning "to the man," 
             and that is where the logic slips up: it speaks to the person, not to his opinions.</p>
         </div>
         <ul>
           <li>Bush's economic arguments make no sense because he is completely insincere and is just after our votes.</li>
          <li>Halevy's great history of the English people is fundamentally flawed because he is a Frenchman, not an Englishman.</li>
         </ul>
         </section>
         <section id="fallacy-9">
         <h2>9. Appeal to Authority</h2>
          <p>The <b>"Appeal to Authority"</b> fallacy cites an inappropriate authority to support a point.</p>
           <ul>
            <li>Don't be fooled by Proposition M (more permits for taxicabs).
               My uncle, who runs a restaurant, says it's a terrible idea.</li>
          </ul>
          <div>
            <p>Of course there's nothing wrong with citing an authority to back up your views. None of us knows much about most things, so it's a good thing to consult someone who does, and to refer to that person. However, it's important to make sure that the "authority" we cite is actually someone who has some knowledge or expertise in the appropriate area. Now, perhaps this speaker's uncle knows a lot about Prop M, but all we know about him is that he runs a restaurant.
               This makes him an authority on how to make good crispy ginger chicken,
                but not necessarily on the taxicab business.</p>
          </div>
          <ul>
            <li>You shouldn't invest in dotcom stocks right now--that's what my doctor says.</li>
            <li>According to a prominent civil litigation lawyer, OJ's criminal trial was "fundamentally flawed." 
              [Note the different specialty of the lawyer--litigation lawyers don't handle criminal trials.]</li>
          </ul>
        </section>
        <section id="fallacy-10">
         <h2>10. Equivocation</h2>
           <p>The <b>"Equivocation"</b> fallacy tries to make a point by pretending that because the same word is used, 
             it means the same thing.</p>
           <ul>
             <li>We don't want prerequisites at College of San Mateo. Prerequisites prevent students gaining access to classes, 
               and our whole mission is to give students access to education.</li>
         </ul>
         <div>
           <p>Equivocation is one of the sneakiest fallacies, 
             and we're often guilty of it by mistake because we're confused. Here, for instance, 
             the speaker has presented us with an apparent contradiction:
              if CSM is all about giving students "access" to education, 
             then how can this be compatible with preventing students from gaining "access" to the classrooms?</p>
         </div>
         <div>
           <p>Of course, there is no real contradiction. It only sounds contradictory because the same word, "access," 
             is used in both cases. But in fact, "access" means different things in each case. "Access" to education means putting students in a position to succeed in their academic goals
             --to enable them to get the skills to transfer to college or get a different job. "Access" to the classroom, 
             however, means making sure the door is open so that students can physically get in! 
             You can give people "access" to the room without helping them get "access" to education,
              by letting them walk into rooms where they won't get the skills they need.</p>
         </div>
         <ul>
           <li>Mark says that he opposes discrimination. He says that employers and landlords should not discriminate 
             on the basis of race, ethnicity, sexual orientation and so on. But when I tried to rent an apartment from him, 
             he discriminated against me just because I have bad credit. That's hypocrisy!
              [No, it's not. See how the speaker misses the point: what matters is the grounds on 
             which people are selected for housing and work. No one has ever objected to reasonable selection criteria.]</li>
         </ul>
         </section>
         <section id="fallacy-11">
           <h2>11. False Analogy</h2>
           <p>The <b>"False Analogy"</b> fallacy compares two very different things,
              but draws conclusions about one based on the other.</p>
           <ul>
            <li>If the state has the right to decide who may or may not own a car, it ought to have the right to decide 
              who may or may not have a baby--and issue licenses to people who are fit parents.</li>
          </ul>
          <div>
            <p>This is often an easy fallacy to identify when other people do it--it's harder to stop ourselves from doing it, 
              though! Here, the speaker decides that what applies to one situation (cars) must apply to another (babies). 
              The trouble is that the two situations may superficially look similar, 
              but they are fundamentally different. You can't reliably draw conclusions from one based on the other.</p>
          </div>
          <div>
            <p>Drawing conclusions about one thing based on another is called drawing an analogy, and it's a very useful and clever device. It often helps us make better sense of abstract concepts because it links them to more familiar concrete ideas. 
              But you need to be careful that the two things you're comparing really are comparable.</p>
          </div>
          <ul>
            <li>Mountaineering may be dangerous, but so is driving a car.</li>
            <li>Capital punishment may indeed kill innocent people, but then, so do inoculations and traffic accidents
              --for that matter, fighting Hitler cost innocent lives too.
               So there's no objection to capital punishment's occasional mistake.</li>
          </ul>
         </section>
         <section id="fallacy-12">
          <h2>12. Appeal to Emotion</h2>
          <p>The <b>"Appeal to Emotion"</b> fallacy tries to persuade by playing on our fears, pity, or other feelings, 
            instead of giving us reasons.</p>
          <ul>
            <li>Immigration cannot continue unchecked. How long before our country crumbles,
               with no one even speaking a common language, and blood running in the streets?</li>
         </ul>
         <div>
           <p>Like its cousin, the slippery slope, appeals to fear are attempts to scare us into agreeing. 
             The slippery slope makes a vague attempt to show that one small thing will lead to huge consequences. 
             Appeals to fear are more basic; 
             simply, they try to scare us into submission. The other most frequent appeal is the appeal to pity.</p>
             <p>Both are useful tactics, and they can work--and not only on your mother.
                Public safety announcements draw freely on appeals to fear (think of safe sex campaigns, anti-drug campaigns etc.) 
                Charity ads try to appeal to our pity with pictures of wide-eyed children and warm music.
                 But emotional appeals are only as good as the point they try to make; 
               and unless they are very relevant and cogent, they can backfire.</p>
         </div>
         <ul>
           <li>The defendant is guilty of murder, because the victim was a young, kind, 
             beautiful woman with her whole life ahead of her, she did not deserve this terrible fate!</li>
             <li>We must protest the presence of nuclear weapons because if we don't, we will all die horribly.</li>
         </ul>
        </section>

        <hr />
      </div>
    </div>
  );
}
