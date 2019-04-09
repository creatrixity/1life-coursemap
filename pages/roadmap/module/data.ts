type module = {
  content: string
  lessons: any,
  nextModule: string|null,
  title: string
  id: number
}

export interface ModulesInterface {
  [key: string]: module,
}

const modules: ModulesInterface = {
  'who-am-i': {
    id: 1,
    title: 'Who Am I?',
    content: (
      `<section class="row mb-3">
        <div class="col-12">
          <article class="module__article">
            <h1 class="h3 module__article__title">Module 1: Who Am I?</h1>
            <p class="module__article__text serif-stack">
            Understanding who we are and what our purpose is in life is the foundation of true living. In this module, you’ll be guided through a series of self-exploration activities to gain a deep understanding of who you are at your core.
            </p>
          </article>
        </div>
      </section>`
    ),
    nextModule: 'my-magnificent-future',

    lessons: {
      1: {
        title: 'Who am I? Roadmap Journey Starts here!',
        type: 'lesson',
        content: (`          
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Who am I? Roadmap Journey Starts here!</h1>
                <h2 class="h5 module__article__title">Module 1: Who Am I?</h2>
              </hgroup>
              <p class="module__article__text serif-stack">
              Understanding who we are and what our purpose is in life is the foundation of true living. In this module, you’ll be guided through a series of self-exploration activities to gain a deep understanding of who you are at your core.
              </p>
            </article>

            <section class="container">
              <h2 class="h5 module__article__title">Kickstart Video with Jenna <i>"Seuss"</i> Bayne</h2>								
            </section>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/c3xpzD9tloQ"
                width="100%"
              />
            </div>

            <article class="module__article container">
              <h3 class="h4 module__article__title">Just a few more things to get you started! :)</h3>
              <p class="module__article__text serif-stack">
                1. Under every "Kickstart Video" , (there's a new one at the beginning of each module!), you'll find your very own My 1Life Roadmap Workbook for that module!
              </p>
              <p class="lead font-weight-bold">
                <a class="text-brand text-underline'} href={'https://drive.google.com/file/d/0B_Skb-DqpicqUzcyVlhsQjBEdGc/view?usp=sharing">GRAB YOUR WORKBOOK NOW, BEFORE MOVING ON!</a>
              </p>

              <blockquote class="blockquote">
                <p class="font-weight-bold">
                  SAVE IT FIRST, then you can type into the spaces and save your work each time you add to the document!										
                </p>
              </blockquote>

              <p class="lead font-weight-bold">
                <a class="text-brand text-underline" href="https://drive.google.com/file/d/0B_Skb-DqpicqUzcyVlhsQjBEdGc/view?usp=sharing">Download the Module 1 PDF Workbook!</a>
              </p>

              <p class="module__article__text serif-stack">
                2. This course has three important components: <br />
              </p>

              <ul class="mb-3 serif-stack lead">
                <li>This web app with the Modules and Lessons</li>
                <li>The videos within each lesson</li>
                <li>The My 1Life Roadmap Workbook </li>
              </ul>

              <p class="module__article__text serif-stack">

                They all work together like pieces of the same puzzle.
                This website is your guide - your compass!
                It provides the overall direction, and as you follow along here, you'll watch the videos that provide guidance to complete the workbook!
              </p>

              <p class="module__article__text serif-stack">
                3. Each module contains a series of tools laid out in a specific sequence for a specific purpose. So if you want to jump around - don't.  Ok?  Trust the process!  We've got your back - just keep moving forward!
              </p>

              <p class="module__article__text serif-stack mb-4">
                4. Within the My 1Life Roadmap course you'll be travelling down a R.O.A.D. where each letter represents a specific process or step that builds on the one before. They're all designed to help you integrate the content, and take action! (Plus, we kinda like the acronym!)
              </p>

              <aside class="mb-4">
                <p class="h3 mb-3">R = Reflect</p>
                <p class="h3 mb-3">O = Observe</p>
                <p class="h3 mb-3">A = Act</p>
                <p class="h3 mb-3">D = Decide</p>
              </aside>

              <p class="module__article__text serif-stack">
                5. As you grow and evolve through the course, and through life, you're always welcome to flip back to review old material, dig a little deeper, re-watch the videos and redo any of the exercises. You have lifetime access to this content!
              </p>
              
              <p class="module__article__text serif-stack">
                6. Lastly, there are recommended reading lists at the end of every module workbook. These are supplementary materials, they aren't necessary to complete the course.
              </p>

              <p class="module__article__text serif-stack">
                The only "extra" resource we reference is "The Richest Man in Babylon" by George C. Clason  in Module 5. You'll need to familiarize yourself with this resource. Frankly, it's  a brilliant, short read that will change your life. If you can't get a copy,  just Google the title, and read about the concepts.
              </p>

              <blockquote class="blockquote">
                <p class="font-weight-bold">
                If you have questions about this lesson, contact us at <a href="mailto:info@1lifefullylived.org">info@1lifefullylived.org</a>
                </p>
              </blockquote>

            </article>
          </div>    
        `)
      },
      2: {
        title: 'My Life Balance Wheel',
        type: 'tool',
        content: `
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Tool #1: My 1Life Balance Wheel</h1>
                <h2 class="h3 module__article__title">Hands on the Wheel!</h2>
              </hgroup>

              <blockquote class="blockquote serif-stack">
                <p class="serif-stack font-weight-bold">"There is no way to happiness. Happiness is the way."</p>
                <footer class="blockquote-footer"><cite title="Buddha">Buddha</cite></footer>
              </blockquote>

              <p class="module__article__text serif-stack">
              One of the most important and insightful practices in life is to (continue) learning who you really are.  Deep inside.  At your core.
              </p>

              <p class="module__article__text serif-stack">
              Often we go through our busy days forgetting about the most important things. We can focus so much on achieving, striving and accumulating in one or two areas of our lives that we neglect other areas or dimensions necessary for a truly fulfilling life.
              </p>

              <p class="module__article__text serif-stack">
              Sometimes we climb up ladders and journey down paths with fierce determination, only to find that once we get there we aren't satisfied. It's important to remember that life isn't about the destination.  And this Roadmap isn't either.
              </p>

              <p class="module__article__text serif-stack">
              Life is about being fulfilled NOW.  About finding balance which leads to happiness.
              </p>

              <p class="module__article__text serif-stack">
              No matter what your circumstances are, you can experience happiness and joy every day - right now -  without waiting for external achievement. 
              </p>

              <p class="module__article__text serif-stack">
                It's not about what you will get by committing to the My 1Life Roadmap. It's about who you choose to BE and what you choose to DO as you  journey through life.  Take care of these two things, and the HAVE will take care of itself.
              </p>
              <p class="module__article__text serif-stack">
              Welcome to the first step. Let's get your hands on the wheel! 
              </p>

              <hgroup class="mb-4">
                <h1 class="h2 module__article__title">R (Reflect)</h1>
                <h2 class="h3 module__article__title">My Intention</h2>
              </hgroup>

              <p class="module__article__text serif-stack">
              Your life is not made up of just one area. That's why when you focus solely on succeeding in your career or your finances, and neglect your intimate relationships, or health or spiritual growth, you're left feeling empty.
              </p>
              <p class="module__article__text serif-stack">
              It's important to find the right balance in yourlife to find fulfillment. Fulfillment is balance in many dimensions in your life, and this is the secret to ultimate success.
              </p>
              <p class="module__article__text serif-stack">
              REFLECT now on your intentions for this class. What brought you here?
              </p>
              <p class="module__article__text serif-stack">
              Answer the reflection questions in your workbook on page 4 with genuine, honest journal entries.
              </p>
              <p class="module__article__text serif-stack">
              The effort you put forth with these answer will directly influence your results for the course. Take your time, find a quiet place, and write from your heart.
              </p>

              <hgroup class="mb-4">
                <h1 class="h2 module__article__title">O (Observe)</h1>
                <h2 class="h4 module__article__title">Video 2: My 1Life Balance Wheel</h2>
              </hgroup>

              <p class="module__article__text serif-stack">
              As you watch, jot down notes on page 4 of your workbook.  Your Balance Wheel is on page 5.  Pause the video as you complete your wheel, or watch it through and complete the wheel after.
              </p>

              <div class="player-wrapper mb-4">
                <ReactPlayer
                  url="https://youtu.be/eXh_pekGSAw"
                  width="100%"
                />
              </div>
              
              <div class="mb-4">
                <hgroup class="mb-4">
                  <h1 class="h2 module__article__title">A (Act)</h1>
                  <h2 class="h4 module__article__title">Completing My 1Life Balance Wheel</h2>
                </hgroup>

                <p class="module__article__text serif-stack">
                You are in a magical place right now! This is the beginning, get excited!!  This is your chance to make some liberating life changes.
                </p>

                <p class="module__article__text serif-stack">
                As you complete your wheel, be brutally honest with your level of satisfaction in each dimension of your life. Clarity is power because once you understand "the now", you can make adjustments for later.
                </p>
              </div>

              <div class="mb-3">
                <hgroup class="mb-4">
                  <h2 class="h4 module__article__title">Roadmap Wheel of Life Written  Instructions</h2>
                </hgroup>

                <p class="module__article__text serif-stack">
                <strong>Step 1</strong> Fill in the 8 dimensions of your life that are most important to you on the blank lines around the wheel. Dimensions of your life may include but are not limited to, relationships with self, relationships with others, family, friends, parenting, career, business, finances, health, diet, fitness, personal growth, fun and recreation, contribution, spirituality/faith, sports, hobbies - the sky is the limit!
                </p>
                <p class="module__article__text serif-stack">
                <strong>Step 2</strong> Rate yourself on a scale from 0 to 10, 0 meaning you have neglected that dimension completely, and 10 meaning that you are elated with your effort, completely satisfied with your results. It may be helpful to ask yourself questions such as, “How do I currently feel in this dimension of my life? How have I been showing up in this area of my life? How would I like to feel in this area?”
                </p>
                <p class="module__article__text serif-stack">
                <strong>Step 3</strong> Once you’ve identified the number, visualize the center of the wheel being 0 and the outside edge being 10. In each dimension, put a dot or a line in the middle of the "wedge" where you estimate your rating to be.”
                </p>
                <p class="module__article__text serif-stack">
                <strong>Step 4</strong> Then connect the dots or shade in each wedge to form a complete 360 degree connection around the whole wheel.
                </p>
                <p class="module__article__text serif-stack">
                <strong>Step 5</strong> What do you see?  What does this say about how you are living your life?
                </p>

                <p class="module__article__text serif-stack">
                As you complete your wheel, be brutally honest with your level of satisfaction in each dimension of your life. Clarity is power because once you understand "the now", you can make adjustments for later.
                </p>
              </div>

            <div class="mb-5">
              <hgroup class="mb-4">
                <h1 class="h2 module__article__title">D (Decide)</h1>
                <h2 class="h4 module__article__title">Enhance My Life Balance</h2>
              </hgroup>

              <p class="module__article__text serif-stack">
              Now that you have a visual depiction of your current life balance, decide how you want your balance to be different.  What are you committed to? What are you happy with? Are there areas that need more or less attention right now?  Thoughtfully answer these questions on page 6 in your workbook.
              </p>
              <p class="module__article__text serif-stack">
              Before moving to the next lesson, choose to take one small action right NOW to balance out your wheel!
              </p>
              <p class="module__article__text serif-stack">
              Then celebrate!  Share what you have learned in our Facebook group if you like!  We'd love to hear from you.
              </p>
            </div>
            <div class="mb-5">
              <em>
                Helpful tip! Remember to complete the  Balance Wheel quarterly to keep you on track and to accurately measuring your progress.
              </em>
            </div>

            <blockquote class="blockquote">
              <p class="font-weight-bold">
              If you have questions about this lesson, contact us at <a href="mailto:info@1lifefullylived.org">info@1lifefullylived.org</a>
              </p>
            </blockquote>
          </article>
        </div>
      `
      },
      3: {
        title: 'My DISC Index',
        type: 'tool',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #1: My 1Life Balance Wheel</h1>
              <h2 class="h3 module__article__title">Hands on the Wheel!</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">"I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to the light I have."</p>
              <footer class="blockquote-footer"><cite title="Abraham Lincoln">Abraham Lincoln</cite></footer>
            </blockquote>

            <p class="module__article__text serif-stack">
            Who am I? What do I like? Why do I do the things I do?
            </p>
            <p class="module__article__text serif-stack">
            Many of us go through life living out expectations we've inherited from others. We conform to outside desires and become disconnected from our own.  It is time to discover what you really want and more importantly go after it! My 1Life Fully Lived is yours to create!
            </p>
            <p class="module__article__text serif-stack">
            Spend precious time and conscious effort getting to know YOU. You are unique, beautiful, strong and powerful. You matter. You have skills and talents that no one else has and the world is waiting for you to bring them to life! 
            </p>
            <p class="module__article__text serif-stack">
            It's time to go deeper and discover your unique  behavior and personality tendencies!
            </p>
            <p class="module__article__text serif-stack">
            This enlightening lesson will help you identify how to use your strengths to your benefit and move ahead down the roadmap path.
            </p>

            <div class="mb-4">
              <hgroup class="mb-4">
                <h1 class="h2 module__article__title">R (Reflect)</h1>
                <h2 class="h4 module__article__title">Who Do I Think I AM?</h2>
              </hgroup>
              <p class="module__article__text serif-stack">
              Just to get the ball rolling and kick this lesson into high gear - begin by reflecting on the person you've become so far in life - what do you know about yourself?
              </p>
              <p class="module__article__text serif-stack">
              Answer the questions in the workbook on page 7. 
              </p>
            </div>

            <div class="mb-4">
              <hgroup class="mb-4">
                <h1 class="h2 module__article__title">O (Observe)</h1>
                <h2 class="h4 module__article__title">Video 2:  The Advantages of Knowing My DISC</h2>
              </hgroup>
              <p class="module__article__text serif-stack">
              The DISC Index or Profile is a common tool for discovering your natural and adaptive tendencies. If this is new to you, just listen to the video, and don't be concerned if you don't absorb it all the first time through.  If you've completed your DISC Index in the past, just keep an open-mind - and complete it again!  You never know what you may learn this time 'round!
              </p>
              <p class="module__article__text serif-stack">
                <em>
                PS - there's room to jot down notes on page 8 of your workbook! 
                </em>
              </p>
            </div>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/4MUe8d8v-F8"
                width="100%"
              />
            </div>

            <div class="mb-4">
              <hgroup class="mb-4">
                <h1 class="h2 module__article__title">A (Act)</h1>
                <h2 class="h4 module__article__title">What is MY DISC Index?!</h2>
              </hgroup>
              <p class="module__article__text serif-stack">
              As you've learned, the DISC Index is based on four basic quadrants of behavioral preferences.
              </p>
              <p class="module__article__text serif-stack">
              Understanding YOUR natural behavioral style allows you to better understand YOUR needs and motivations for success, as well as how you relate to others, and how others relate to you.
              </p>
              <p class="module__article__text serif-stack">
              1.  Take the DISC index now.  To get the most accurate reflection, be thoughtful and honest with your answers, but don't overthink it.
              </p>
              <p class="module__article__text serif-stack">
              Typically your initial reaction is your truth.
              </p>
              <p class="module__article__text serif-stack">
              Answer each question as how you truly believe you ARE - rather than who you would like to BE.  There are no right or wrong answers!  You are uniquely YOU - and you are greater than the sum of your parts - so no judgement.  Ok?
              </p>
              <p class="module__article__text serif-stack">
              After you complete the Index, your results will be e-mailed to you.
              </p>
              <p class="module__article__text serif-stack mb-4">
              2.  Review your results - and answer the questions on page 9 and 10 in your workbook.
              </p>
              <p>
                <a class="h2 font-weight-bold" href="https://discpersonalitytesting.com/free-disc-test/">DISC TEST</a>
              </p>
            </div>
            <div>
              <hgroup class="mb-4">
                <h1 class="h2 module__article__title">D (Decide)</h1>
                <h2 class="h4 module__article__title">USE My New Insight!</h2>
              </hgroup>

              <p class="module__article__text serif-stack">
              Great!  You now have some very valuable insights about your behavioral tendencies.
              </p>                  
              <p class="module__article__text serif-stack">
              Consider how you can use this to your advantage.  Complete the self-reflection questions in your workbook on page 11.
              </p>
              <p class="module__article__text serif-stack">
              Congratulations!  You're already growing and developing a more amazing relationship with yourself.  Can you feel it?!  Wanna share?!  We'd love to hear what's coming up for you!
              </p>

              <blockquote class="blockquote">
                <p class="font-weight-bold">
                If you have questions about this lesson, contact us at <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
                </p>
              </blockquote>
            </div>
          </article>
        </div>
        `
      },
      4: {
        title: 'My Miracle Morning',
        type: 'tool',
        content: `
          <article class="module__article container mb-5">
          <hgroup class="mb-3">
            <h1 class="h2 module__article__title">Tool #3: My Miracle Morning</h1>
            <h2 class="h3 module__article__title">Hal Elrod's Miracle Morning</h2>
          </hgroup>

          <blockquote class="blockquote serif-stack">
            <p class="serif-stack font-weight-bold">
            "Every new morning starts a new page in your story. Make it a great one today!"</p>
            <footer class="blockquote-footer"><cite title="Anonymous">Anonymous</cite></footer>
          </blockquote>

          <p class="module__article__text serif-stack">Change doesn't happen through force, willpower or chance.</p>
          <p class="module__article__text serif-stack">Change occurs through choice.</p>
          <p class="module__article__text serif-stack">
          Only you can choose to raise your standards today and be better than who you were yesterday.  Only you can choose to fulfill your fullest potential in this amazing life you've been given.
          </p>
          <p class="module__article__text serif-stack">
          And the road to 1Life Fully Lived is not  easy.  It takes work.  You have to stay the course, you have to keep on keeping on, you have to step outside your comfort zone.  And,  sometimes, life rains on your parade.
          </p>
          <p class="module__article__text serif-stack">And you have to choose to keep going forward anyway.</p>
          <p class="module__article__text serif-stack">
          To keep moving, especially when you feel like quitting or detouring,  you need momentum, resilience, energy and a determined attitude to seize this day and make it epically impactful and purposeful.
          </p>
          <p class="module__article__text serif-stack">You need the Morning Miracle!</p>
          <p class="module__article__text serif-stack">
          The Morning Miracle is a routine to help you embrace a peak mental peak so you can show up powerfully, every day.  So you can keep moving forward through life with purpose and passion, and overcome ALL adversity you may encounter on your journey.
          </p>
          <p class="module__article__text serif-stack">
          Before you resist the early morning challenge, think about your life now - and how different it could be. Think who you want to BE and what you want to DO.
          </p>
          <p class="module__article__text serif-stack">
          Your life will not change if you do not change.
          </p>
          <p class="module__article__text serif-stack">
          You are the driver of this bus, captain of this ship and CEO of your life.  Grab what is yours!
          </p>
          <div class="mb-4">
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h4 module__article__title">My Current Morning</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
            The way you begin your morning has the potential to dramatically shift your mindset for the rest of the day!
            </p>
            <p class="module__article__text serif-stack">
            Beginning your day late, rushed and panicked creates a very different energy than being relaxed, grounded, focused and ready for anything.
            </p>
            <p class="module__article__text serif-stack">
            How do you typically start your days? What are your mornings like?  How might life be different if you started your morning with a stimulating mindset routine?
            </p>
            <p class="module__article__text serif-stack">
            Consider how you would like to improve the productivity of your day, and how your life could dramatically shift.  Write your answers in your workbook on page 12. If you already have a routine, write about how it is working for you and how you could enhance it.
            </p>  
          </div>

          <div class="mb-4">
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h4 module__article__title">Video 4: Creating MY Miracle Morning</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
            There is space in your workbook on page 13 to fill in what S.A.V.E.R.S. stands for and write your personal notes.
            </p>
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/kk62P8GC4LA"
                width="100%"
              />
            </div>

            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h4 module__article__title">Commit to Practicing My Miracle Morning!</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
            The Miracle Morning is a daily routine meant to empower high performance emotional states. By committing to this practice, and investing time and effort developing yourself, you'll become the person you want and need to be, to make it through your 1Life Roadmap journey. 
            </p>
            <p class="module__article__text serif-stack">
            The Miracle Morning: S.A.V.E.R.S.  
            </p>

            <h4 class="h5 module__article__title">1.  SILENCE:</h4>
            <p class="module__article__text serif-stack">
            Begin each day with a period of purposeful silence. This helps reduce your stress level and supports your ability to stay focused and present. Consider prayer, mediation or simply just sitting quietly with an open mind.
            </p>

            <h4 class="h5 module__article__title">2. AFFIRMATIONS :</h4>
            <p class="module__article__text serif-stack">
            Program yourself to be confident and successful simply by repeatedly telling yourself who you want to be, what you want to accomplish, and how you're going to accomplish it. With repetition, your sub-conscious mind begins to believe  it, act upon it, and eventually, manifest it.
            </p>

            <h4 class="h5 module__article__title">3. VISUALIZATION:</h4>
            <p class="module__article__text serif-stack">
            Seek to generate positive results by using your imagination to create mental pictures of specific behaviors and outcomes you desire.  Imagine exactly what you want to achieve or attain, and then mentally rehearse what you need to do to achieve or attain this outcome.
            </p>

            <h4 class="h5 module__article__title">4. EXERCISE:</h4>
            <p class="module__article__text serif-stack">
            Move your body to boost your energy, enhance your health, improve your self-confidence and emotional well-being, and find mental clarity, creativity and concentration!  That's a win-win-win all the way around!
            </p>

            <h4 class="h5 module__article__title">5. READING:</h4>
            <p class="module__article__text serif-stack">
            Fast track any area of your life by reading. Acquire knowledge, ideas and strategies you need to achieve your 1Life Fully Lived.
            </p>

            <h4 class="h5 module__article__title">6. SCRIBING</h4>
            <p class="module__article__text serif-stack mb-4">
            Write freely in a journal to release any blocks, stories, thoughts and ideas that are stored in your head so you're free to start your day with a clear, open mind.
            </p>

            <p class="module__article__text serif-stack font-weight-bold">
              NOW - Make it happen! What will your Miracle Morning look  like?  What do you need to do to in order to begin practicing the Miracle morning tomorrow? 
            </p>
            <p class="module__article__text serif-stack font-weight-bold">
              On page 14, note what you will do to set yourself up for success. Address any foreseeable obstacles and what you'll do in the (likely!) event one pops up.  How will you navigate weekends, travel, kids at home?  Be creative!
            </p>
          </div>

          <hgroup class="mb-4">
            <h1 class="h2 module__article__title">D (Decide)</h1>
            <h2 class="h4 module__article__title">Schedule It.  And Follow Through!</h2>
          </hgroup>
            <p class="module__article__text serif-stack font-weight-bold">
            The whole trajectory of your life could change by implementing the S.A.V.E.R.S.!!
            </p>
            <p class="module__article__text serif-stack font-weight-bold">
            The choice is always yours, and so are your results. 
            </p>
            <p class="module__article__text serif-stack font-weight-bold">
            Use the checklist on page 15 to help you get set up.  On page 16 you'll find a tracking chart. Check off each day that you complete your Miracle Morning routine!            
            </p>
            <p class="module__article__text serif-stack font-weight-bold">
            We suggest completing The Miracle Morning every day for at least 21 days straight! 
            </p>
            <p class="module__article__text serif-stack font-weight-bold">
            If you choose to embrace this, we guarantee you'll love the experience - and the magic - of waking up with purpose and intention!
            </p>

            <blockquote class="blockquote">
              <p class="font-weight-bold">
              If you have questions about this lesson, contact us at <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
              </p>
            </blockquote>
        </article>
        `
      },
      5: {
        title: 'Who am I?: Wrap Up',
        type: 'lesson',
        content: `
        <article class="module__article container mb-5">
          <hgroup class="mb-4">
            <h1 class="h2 module__article__title">Who am I?: Wrap Up</h1>
            <h2 class="h4 module__article__title">Module #1: Who Am I?</h2>
          </hgroup>
          <h3 class="h5 module__article__title">Wrap It Up!</h3>
          <div class="player-wrapper mb-4">
            <ReactPlayer
              url="https://youtu.be/eGBbJZUXcTQ"
              width="100%"
            />
          </div>
          <p class="module__article__text serif-stack">
            The whole trajectory of your life could change by implementing the S.A.V.E.R.S.!!
          </p>
          <p class="module__article__text serif-stack">
            The choice is always yours, and so are your results. 
          </p>
          <p class="module__article__text serif-stack">
            Write your intention for the week, what you are committed to accomplishing, who you want to BE, and how you want to show up for yourself! 
          </p>

          <p class="font-weight-bold">
          If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
          </p>

        </article>
        `
      },
    },
  },
  'my-magnificent-future': {
    id: 2,
    title: 'My Magnificent Future',
    content: (
      `<section class="row mb-3">
        <div class="col-12">
          <article class="module__article">
            <h1 class="h3 module__article__title">Module 2: My Magnificent Future!</h1>
            <p class="module__article__text serif-stack">
            The secret to living an abundant life is being able to envision what you truly desire, holding it in your heart and knowing you deserve it. In this module, you’ll discover what dreams and destinations are most meaningful for you, and how to connect with your deepest life purpose. You’ll also strengthen your inner game with mindset skills to continually support your Roadmap journey.
            </p>
          </article>
        </div>
      </section>`
    ),
    nextModule: 'my-plan4me',

    lessons: {
      1: {
        title: 'My Magnificent Future! Turning Dreams into Reality',
        type: 'lesson',
        content: (
          `
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">My Magnificent Future! Turning Dreams into Reality</h1>
                <h2 class="h5 module__article__title">MODULE 2: MY MAGNIFICENT FUTURE!</h2>
              </hgroup>
            </article>

            <section class="container">
              <h3 class="h5 module__article__title">Kickstart Video with Jenna <i>"Seuss"</i> Bayne</h3>
            </section>
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/YUpEYhMBYII"
                width="100%"
              />
            </div>

            <h2 class="h5 module__article__title">WHOO HOO! ON TO MODULE 2!</h2>

            <p class="module__article__text serif-stack">
            It's easy to log in to this course, and it's easy not to. The choice you're making to show up here is really admirable.
            </p>
            <p class="module__article__text serif-stack">
            Be proud of yourself for showing up!
            </p>
            
            <p class="module__article__text serif-stack">
            In the last module, you connected with who  you are at your core. Now, in Module 2, you're digging deep into your heart's desires to identify what YOUR 1Life Fully Lived truly looks like for YOU.
            </p>
            
            <p class="module__article__text serif-stack">
            You won't be sleeping in this module,  but you WILL be dreaming.
            </p>

            <p class="module__article__text serif-stack">
            Grab your Module 2 Workbook - then head on over to the next lesson...
            </p>

            <p class="mb-3">
              <a class="h4" href="https://drive.google.com/open?id=0B_Skb-DqpicqNTBXNFlDMHZhenc">
                Module 2 Workbook
              </a>
            </p>

            <p class="font-weight-bold">
            If you have questions about this lesson, contact us at <a href="mailto:info@1lifefullylived.org">info@1lifefullylived.org</a>
            </p>
              
          </div>
          `
        )          
      },

      2: {
        title: 'My 1Life Fully Lived Portrait',
        type: 'tool',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #1: My 1Life Fully Lived Portrait</h1>
              <h2 class="h3 module__article__title">Creating My 1Life Portrait</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">
              “Anything that has ever been created was first imagined.”</p>
              <footer class="blockquote-footer"><cite title="Ralph Emerson">Ralph Emerson</cite></footer>
            </blockquote>

            <p class="module__article__text serif-stack">
              Two extremely powerful traits all humans have are our ability to dream, and the ability to create that dream.  In other words, we are the powerful creators of our own lives and have everything we need to create what  we really want. 
            </p>
            <p class="module__article__text serif-stack">
              The first step is identifying what we REALLY want. When we  have a target in mind, then we know where to aim. Without a set target, we don't know where to shoot. This can be life threatening!
            </p>
            <p class="module__article__text serif-stack">
              <i>So, let's get dreamin'!</i>
            </p>
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h4 module__article__title">Listen to My Heart</h2>
            </hgroup>
            <p class="module__article__text serif-stack">Get comfortable and breathe deeply.</p>
            <p class="module__article__text serif-stack">Reflect on your balance wheel.</p>
            <p class="module__article__text serif-stack">
            What do you love about your life?  What do want to change?  What do you want more of? 
            </p>            
            <p class="module__article__text serif-stack">
            On page 3 of your workbook, compare and contrast what you want and don't want in your life as you move forward on your journey. 
            </p>            
            <p class="module__article__text serif-stack mb-4">
            The Miracle Morning is a daily routine meant to empower high performance emotional states. By committing to this practice, and investing time and effort developing yourself, you'll become the person you want and need to be, to make it through your 1Life Roadmap journey. 
            </p>

            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h4 module__article__title">Video 2: Tim Rhode's 1Life Portrait</h2>
            </hgroup>
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/zjD9kUrbqvk"
                width="100%"
              />
            </div>
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h4 module__article__title">Rocking Chair Brainstorm</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
            Whoa, this exercise is powerful!  You will LOVE it! 
            </p>
            <p class="module__article__text serif-stack">
            Beginning with the end in mind is helpful  because you actually see the goal as if it's already accomplished. It gives you the freedom to get clear on what you really want, and make any adjustments NOW before you get to your desired destination and realize it isn't what you really wanted after all. 
            </p>
            <p class="module__article__text serif-stack">
            Let's begin with a visualization practice. This is just a fun way to ease your mind into this "backward design" process. 
            </p>
            <p class="module__article__text serif-stack">
            Sit for three minutes (set your timer) and visualize your future as if you were 90 years-wise right now.  
            </p>
            <p class="module__article__text serif-stack">
              1.  In your most magnificent vision - your best version of your life - what are you doing?  Who are you with?  How do you feel?  
            </p>            
            <p class="module__article__text serif-stack">
              2.  Now, look back on your life as if you were playing a movie in your mind.  Notice all the events that have occurred, the people you are surrounded  by, how you look and how you feel, and whatever else you notice.  Allow your imagination to go where it wants to go. Surrender to the process.   
            </p>            
            <p class="module__article__text serif-stack">
              If you are having a hard time visualizing, don't be hard on yourself, sometimes it takes practice.  Just breath and play with any images that come up for you.  Your magnificent future is waiting for you. - all you have to do is create the dream...   
            </p>
            <p class="module__article__text serif-stack">
              What did you see?   
            </p>            
            <p class="module__article__text serif-stack">
              When you're ready, flip to page 5 of your workbook - the Rocking Chair!   
            </p>
            <p class="module__article__text serif-stack">
            Imagine the 90 year-wise version of you and you are looking at your life.
            <strong>What do you want to be able to say about your past, your current situation and your future?</strong>  Place the highlights of your life around the rocking chair.   
            </p>
            <p class="module__article__text serif-stack">
            Imagine the 90 year-wise version of you and you are looking at your life.
            <strong>What do you want to be able to say about your past, your current situation and your future?</strong>  Place the highlights of your life around the rocking chair.   
            </p>

            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h4 module__article__title">Create My 1Life Portrait</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Now you are ready  to write the script for your 1Life Fully Lived Portrait!  You can write it by hand, or type it on your keyboard...
            </p>

            <p class="module__article__text serif-stack">
            Write the vision of your life as you choose to create it.  Be specific, detailed and clear.  Refer to your balance wheel so you can include all areas of your life that are most important to you.  Add any others you want to include in the future.
            </p>
            <p class="module__article__text serif-stack">
            Imagine the life you want to live and that anything is possible.   Time, money, resources are not an issue.   Don't worry about the how.   Don't hold back. Write from your heart on page 6.
            </p>
            <p class="module__article__text serif-stack">
              <strong>WHAT DO YOU WANT YOUR LIFE TO LOOK LIKE?</strong> You get to choose!
            </p>
            <p class="module__article__text serif-stack">
            There is scientific evidence that what you write becomes implanted in your brain, in your subconscious, and amazing things happen if you just follow the process.  So don't skimp here.  Take your time and write out the vision for your Magnificent Future!
            </p>
            <p class="module__article__text serif-stack">
            Next, if you have created your vision on your computer, print it out.
            </p>
            <p class="module__article__text serif-stack">
            Hold and read your vision weekly.  Even daily!  Feel the emotions behind your dreams and let them resonate in every cell and fiber of your being.
            </p>
            <p class="module__article__text serif-stack">
            Having trouble?! Check out this started example to help get your creative juices flowing. Allow yourself to dream big! This is the whole point of choosing to write when you are 90 years wise. We want you to step into your imagination. Developing your plan for the next year or five years keeps you constricted and practical. Step outside of logic and all the "how is this ever going to happen" mind stories, and just dream. You are the powerful creator of your own reality - create EXACTLY what YOU want. No boundaries,  no judgment, no rules!
            </p>
            <p class="mb-4">
              <a class="h4" href="http://my1liferoadmap.1lifefullylived.org/wp-content/uploads/2016/12/90-Years-Wise-Example.pdf">
                90 Years Wise Starting Example
              </a>
            </p>
            <p class="module__article__text serif-stack">
            BONUS CHALLENGE: For extra-impact, create a vision board, video, narrative, or some other form of creation depicting your Magnificent Future Vision. Keep in it in a place you will see it every day.  Engage with it, meditate on it, FEEL what it is like to live your dream.
            </p>
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
  
          </article>
        `
      },
      3: {
        title: 'Tool #2: Discover Your Deepest WHYs',
        type: 'tool',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #2: Discover Your Deepest WHYs</h1>
              <h2 class="h3 module__article__title">Finding Your Heart</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">
              “When your why is big enough, you will find your how”</p>
              <footer class="blockquote-footer"><cite title="Anonymous">Anonymous</cite></footer>
            </blockquote>

            <p class="module__article__text serif-stack">Become unstoppable!</p>
            <p class="module__article__text serif-stack">
              Life  can be like a roller coaster! Sometimes you feel you are rocking it and everything easily falls in to place  - and other times you feel you just can't win.
            </p>
            <p class="module__article__text serif-stack">
            Expect it.  Embrace it.  Move through it.
            </p>
            <p class="module__article__text serif-stack">
            To set yourself up with the highest form of insurance against procrastination, utter defeat or other fear-type behavior, you must connect strongly to a compelling WHY.  When you become clear WHY you want to accomplish certain things - WHY they REALLY matter to you - and you can FEEL it within every fiber of your body, then you are wired to succeed!             </p>
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h4 module__article__title">What Are Your Big Rocks?</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
              This exercise may be one of the most important things you do in your life. After visualizing your big future dream, it's easy to get stuck or feel overwhelmed because it's SO huge to think about! 
            </p>
            <p class="module__article__text serif-stack">
              In this exercise you'll identify three "big rocks" for you to focus on for the rest of this class. These are the 3 most important desires you want to create.  Can they change? Absolutely.  Don't get blocked by having the idea that you can't change your mind! Can you add more down the line? You bet! We're just beginning with 3. 
            </p>
            <p class="module__article__text serif-stack">
            Watch the BIG ROCKS DEMONSTRATION VIDEO 3 now.  You may also want to read the Big Rocks story by Stephen Covey below.  
            </p>            

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/ONUzmow9IiU"
                width="100%"
              />
            </div>
            <h2 class="h4 module__article__title">
              <a href="http://my1liferoadmap.1lifefullylived.org/wp-content/uploads/2016/07/The-Big-Rocks-Demonstration.pdf">Big Rocks Story</a>
            </h2>

            <p class="module__article__text serif-stack">
            Now, refer back  to your Balance Wheel and 1Life Portrait.  What are your three big rocks right now?
            </p>            
            <p class="module__article__text serif-stack">
            Label YOUR rocks  on page 7 in your workbook.
            </p>            

            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h4 module__article__title">Video 4: Going Deep with your WHY</h2>
            </hgroup>
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/ek-OrOgY6Z4"
                width="100%"
              />
            </div>
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h4 module__article__title">Take Your Rocks Deep With Your WHY!</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Take your top 3 rocks through the “Deeper WHY” journey as described in the video. It's all set up for you in the workbook on page 9-10.   Simply fill in the chart.
            </p>
            <p class="module__article__text serif-stack">
            Helpful hints: With each rock ask yourself these key life questions: Why does this matter to me? Why do I want thus? Who do I want to be in my life and how will this help me? Write down what comes up for you with each desired rock. Then continue going at least 4 deep with your why, asking questions such as, "Why do I want this?" and  "Why does this matter to me?" each time.
            </p>
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h4 module__article__title">Identify your Purpose</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
            If you were truly honest with yourself, and took deliberate and considerate time with each level of your WHYs then you actually have found your core life purpose. 
            </p>
            <p class="module__article__text serif-stack">
            The final question to ask is, "If you achieved your final WHY (your purpose for each), is there anything greater that could happen for you in your life?"  
            </p>
            <p class="module__article__text serif-stack">
            If there is not, you have found your purpose statement for that rock. If there is something greater, then this new vision is your final purpose for that rock. Write out your final purpose statements in the chart found in your workbook on page 11.   
            </p>            
            <p class="module__article__text serif-stack">
            Helpful Hint: you may wish to combine your purpose statements so you only have one. You may also find that they are all similar already and may just want to choose one, or you may want to write out all three and keep them separate. It's up to you!
            </p>            
            <p class="module__article__text serif-stack">
              If you are having a hard time visualizing, don't be hard on yourself, sometimes it takes practice.  Just breath and play with any images that come up for you.  Your magnificent future is waiting for you. - all you have to do is create the dream...   
            </p>
            <p class="module__article__text serif-stack">
              BONUS: Print and post your purpose statements in places you will see them daily. Read them during your Miracle Morning to remind you of your deepest WHY and inspire you to take consistent action!
            </p>  
          </article>
        `
      },

      4: {
        title: 'Tool #3: My Personal Board of Directors',
        type: 'tool',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #3: My Personal Board of Directors</h1>
              <h2 class="h3 module__article__title">Power of Influence</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">
              “If you're the smartest one in the room, you're in the wrong room”</p>
              <footer class="blockquote-footer"><cite title="Anonymous">Anonymous</cite></footer>
            </blockquote>
            <p class="module__article__text serif-stack">
            Every major company has board meetings weekly, monthly, or quarterly.  During these meetings the main topics are last quarter’s results and future growth.
            </p>
            <p class="module__article__text serif-stack">
            Having the right team is one of the most critical components for positive growth and success. 
            </p>
            <p class="module__article__text serif-stack">
            The business of your life should be handled with the same care and attention.
            You are the CEO of your life, the driver of your vehicle and the Master of your Universe. And, as the BOSS, it's important for you to create your own <em>Personal Board of Directors</em>, to help hold you accountable to your self, and to help you keep  moving in the right direction. 
            </p>
            <p class="module__article__text serif-stack">
            Your Personal Board of Directors is composed of people and resources  that massively influence your life decisions and direction. 
            </p>
            <p class="module__article__text serif-stack">
            As you discovered with the 1Life Balance Wheel, your life is composed of many different dimensions and each one  requires different expertise. So, your board should be diverse! For example, the person you take financial advice from may not be the same person you take health advice from, because they have different knowledge and experience. 
            </p>
            <p class="module__article__text serif-stack">
            So, let's maximize our success by creating the support team around us we need! It's is time to create your board! 
            </p>
            <p class="module__article__text serif-stack">
            "You are the average of the five people you spend most time with." - Jim Rohn.
            </p>

            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="My Influences</h2>
            </hgroup>

            <p class="module__article__text serif-stack">            
            Think about all the things in your life that influence  you.
            </p> 

            <p class="module__article__text serif-stack">
            Family, friends, social media, television, magazine titles, weather patterns and so many other external forces.
            </p>

            <p class="module__article__text serif-stack">
            The wildest thing about this, is that most of the time you aren't even aware you're being influenced because it happens automatically. Something comes into your focus and this provokes your internal thoughts, feelings and behaviors.
            </p>

            <p class="module__article__text serif-stack">
            All these external influences combine to create the stories of your life.  The stories you tell yourself that you aren't good enough, or that you can't do something.  The truth is that you are perfect just the way you are, and you don't need to change, your stories do!
            </p>

            <p class="module__article__text serif-stack">
            To understand the dramatic ways you're influenced by external sources, answer the questions in your workbook on page 12!
            </p>

            <p class="module__article__text serif-stack">
            As you look at your list, take a deep breath and recognize that these are just stories.  They aren't true.  They are an accumulation of all the things you've been lead to believe by the media, and even by well-meaning (or not) family, friends, and authority figures.  Understanding the stories or limiting beliefs you carry is the first step to letting them go so they no longer have power or influence over you.
            </p>
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3">Video 5: My Personal Board of Directors</h2>
            </hgroup>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/fDQaBPXRVrM"
                width="100%"
              />
            </div>

            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3">Crafting My Personal Board of Directors</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            There are many ways for you to go about crafting your Personal Board of Directors!
            </p>

            <p class="module__article__text serif-stack">
            We'll share two ideas, or you can come up with your own!  Since your life is composed of multiple dimensions, your board should be diverse - the chart in your workbook on page 14 will guide you through the process.
            </p>
            <p class="module__article__text serif-stack">
             The bottom line is that your Personal Board of Directors is a group of individuals and resources that inspire you, motivate you and support you with living your 1Life Fully Lived.
            </p>
            <p class="module__article__text serif-stack">
            1. You can choose 5 to 8 diverse individuals and allow them to guide you in all areas, perhaps some more than others depending on your focus at a particular time.
            </p>
            <p class="module__article__text serif-stack">
            For example, let's say your  best friend Dave is someone you want on your board. You might go to him for relationship advice because he has a thriving marriage, and he also happens to be a financial adviser. You trust his financial and relationship advice, but he is not very health oriented. Thus, you would put "Dave" in the chart under "Relationships" and in "Finances".  
            </p>

            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">OR</h1>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            2. Start with the dimensions of your life and identify who you want  on your board for that specific dimension . As above, individuals and resources may overlap.
            </p>
            <p class="module__article__text serif-stack">
            No matter how you choose to craft your board, here are some final thoughts that apply to all methods:
            </p>
            <p class="module__article__text serif-stack">
            1. The idea of crafting your Personal Board of Directors is to have a support system that generates wisdom, insight and perspective for you. Seek out people you aspire to be like and connect with them. You want to surround yourself with an environment that lifts you up to higher levels of success.
            </p>
            <p class="module__article__text serif-stack">
            2. Having a diverse board is essential. Having a board with people exactly like you won't always be helpful. Include different personalities, different ages, different skill-sets, different backgrounds and different levels of success. 
            </p>
            <p class="module__article__text serif-stack">            
            3. Allow your board to change and evolve as you do, but be cautious that you are choosing wise, trust-worthy sources.  You will meet new people, grow to different levels and experience different needs so be open to evolution while also choosing wisely.
            </p>

            <p class="module__article__text serif-stack">
            Finally, be playful with your board! Go back to your chart and include songs, quotes, books, podcasts, resources, and environments that support you.
            </p>
            <p class="module__article__text serif-stack">            
             Highlight, note, star or circle these influences for your next step. 
            </p>
            <p class="module__article__text serif-stack">
            You've just crafted your board! Look at all the amazing support you have!
            </p>
            
            <hgroup class="mb-4">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h3">HIRE Your Board!</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Now that you've identified your board on paper, it's time to gather up your team and clear your space for those you want on your board. 
            </p>
            <p class="module__article__text serif-stack">
            1. Begin by telling those you want on your board that they play an important role in your life, and how much you value your wisdom and support. This is often an honor for the receiving person so have fun with these conversations. If at all possible, connect with these people face to face or virtually. Take them to lunch and gain more insight and wisdom just by being in their presence. Spending time with thought leaders and supportive people will propel you forward.
            </p>
            <p class="module__article__text serif-stack">
            2. Identify those relationships that are no longer serving you.  What is best for you, your goals and ultimate success? 
            </p>
            <p class="module__article__text serif-stack">
             It may not mean the end of a friendship but maybe you'll choose to spend less time with that person or persons. For example, maybe going out partying every Friday and Saturday night with your buddies is no longer serving you spiritually, mentally, physically or financially. You may need to find a new friend or group who supports your success goals and spend less times with the people who will keep you stuck.
            </p>
            <p class="module__article__text serif-stack">
            Perhaps a conversation with your partner explaining why getting up at 5am to go to the gym is important to you, and that you appreciate their support with it. Your partner doesn't need to do it with you, but have the conversation that, in order for you achieve your goals, you need your partner to be understanding or  ____(fill in the blank) so you feel supported. Then offer to support your partner with one of his or her goals. 
            </p>
            <p class="module__article__text serif-stack">
            3. Find someone in My 1Life Roadmap Community to have on your board and be on someone's board. This could be your accountability partner or maybe even a mastermind you create outside the course to support you with the roadmap  journey specifically. 
            </p>
            <p class="module__article__text serif-stack">
            4. Finally, what quotes, podcasts, books, seminars, events and so on do you identify with and want to connect with on a regular basis? Set up your environment, organize your space and resources, and hang quotes on the wall! 
            </p>
            <p class="module__article__text serif-stack">
            JOB WELL DONE! Time for a break!
            </p>
          </article>
          `
      },
      5: {
        title: 'Tool #4: My Transition Story',
        type: 'tool',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #4: My Transition Story</h1>
              <h2 class="h3 module__article__title">My Transition Story</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">
              “Honor the space between no longer, and not yet.”</p>
              <footer class="blockquote-footer"><cite title="Nancy Levin">Nancy Levin</cite></footer>
            </blockquote>
            <p class="module__article__text serif-stack">
            In order to take your life to the next level, you need to cultivate the mental fitness to make it happen. Knowing your deepest WHY is the first step to achieving powerful motivation to stay committed to our desires. Now ,we are taking our mental stamina to the next level.
            </p>
            <p class="module__article__text serif-stack">
            In this lesson, you'll learn an amazing strategy to calm your nervous system while you are transitioning to a new paradigm in your life. It's called My Magnificent Transition Story.  Practicing it daily allows you to move out of your sympathetic nervous system response (fight or flight stress response) into your parasympathetic nervous system response.
            </p>
            <p class="module__article__text serif-stack">
            Why is this important?  Any time you begin to change, you can experience inner turmoil and resistance.  Your brain works to keep you "safe" (to keep you stuck) and manifests confusion, fear, anxiety, and procrastination, to name a few "security systems".  All these things work to stop you from taking risks, to stop you from growing and achieving your fullest potential.  
            </p>
            <p class="module__article__text serif-stack">
            This state of change/stress causes the body and mind to react quickly. This happens when you feel  frustrated and overwhelmed, which can ultimately cause you to sabotage your efforts and do  things you don't want to do, (but do anyway!)
            </p>
            <p class="module__article__text serif-stack">
            When you can come from a place of relaxation, with a clear mind, you can easily take inspired action to move forward in life, finding creative strategies and solutions to things that used to hold you back!
            </p>
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">You Can Do This!</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Think about your life journey up to this point and where you envision your life journey taking you.
            </p>
            <p class="module__article__text serif-stack">
            Explore the feelings that come up for you. When you think about making it happen, how do you feel? Do you feel you have what it takes? Are you nervous?  Do you feel unworthy?  Do you feel empowered?  You probably feel MANY things - even conflicting things - journal these thoughts and feelings in your workbook on page 16. 
            </p>

            <p class="module__article__text serif-stack">
            Remember - turning your dreams into reality is 85% mental!  It's the inner game of life.  It doesn't happen overnight, but it starts with being aware of the feelings and fears so you can work through them!
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3 module__article__title">Video 5: My Magnificent Transition Story</h2>
            </hgroup>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/vy9-nXxwu74"
                width="100%"
              />
            </div>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Create Your Own Transition Story</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
            Your Transition Story will help you as you experience your own transition through the roadmap journey. Your journey will have ups and downs, lots of uncertainty and loads of trial and error.
            </p>
            <p class="module__article__text serif-stack">
            And, it is what you are learning, who you are becoming and how you handle the disappointments, successes and exhaustion that really matters. 
            </p>
            <p class="module__article__text serif-stack">            
            Fill in the writing prompts in your workbook on page 18 to create your own Transition Story. You cannot do this wrong, just speak from your heart.
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h3 module__article__title">Read My Transition Story Daily</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            Write out your story in one sequence in your workbook on page 19. Post this story around your environment and read it out loud daily. Stick a copy in your wallet or your purse, and read it before you take a risk to help center and calm your nerves. 
            </p>
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        `
      },
      6: {
        title: 'My Magnificent Future: Wrap up',
        type: 'lesson',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">My Magnificent Future: Wrap up</h1>
              <h2 class="h3 module__article__title">Module 2 Complete!</h2>
            </hgroup>

            <h3>Final Thoughts...</h3>

          </article>

          <div class="player-wrapper mb-4">
            <ReactPlayer
              url="https://youtu.be/rNngtO4_KkY"
              width="100%"
            />
          </div>

            <article class="module__article container mb-5">
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        `
      },
      7: {
        title: 'Next Time…',
        type: 'lesson',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Next Time…</h1>
              <h2 class="h3 module__article__title">Next Time!    Module 3 My Plan4Me</h2>
            </hgroup>

            <h3>Final Thoughts...</h3>
            <p class="module__article__text serif-stack">
            Without a plan, we don't know where we are going, and we can drift through life and never embrace our full potential. In this module, you'll create a plan to reach your destination, and identify the action steps to take you from where you are now, to where you want to go. You'll walk away knowing what checks points you want to reach on your journey, and how to get back on track when you come to a traffic jam, detour, bad weather or GPS malfunction!
            </p>
          </article>

          <article class="module__article container mb-5">
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        `
      }
    },


  },

  'my-plan4me': {
    id: 3,
    title: 'My Plan4Me!',
    content: (
      `<section class="row mb-3">
        <div class="col-12">
          <article class="module__article">
            <h1 class="h3 module__article__title">Module 3: My Plan4Me!</h1>
            <p class="module__article__text serif-stack">
            Without a plan, you don’t know where you’re going, and you can drift through life and never embrace your full potential.
            </p>
            <p class="module__article__text serif-stack">
            In this module, you’ll identify the steps to take you from where you are now, to where you want to go.  You’ll walk away knowing what checks points you want to reach on your journey, and how to get back on track when you come to a traffic jam, detour, bad weather or have a GPS malfunction!
            </p>
            <p class="module__article__text serif-stack">
            The biggest difference between “success” and “failure” is having a written plan to follow and taking inspired action daily.  The plan may well change – and that’s fine – revise it along the way and keep moving forward!
            </p>
          </article>
        </div>
      </section>`
    ),
    nextModule: 'financial-offense',

    lessons: {
      1: {
        title: 'My Plan4Me! Journey Preparation',
        type: 'lesson',
        content: (`
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">My Plan4Me! Journey Preparation</h1>
              <h2 class="h5 module__article__title">MY Plan4Me!</h2>
            </hgroup>
          </article>

          <section class="container">
            <h2 class="h5 module__article__title">Kickstart Video with Jenna <i>"Seuss"</i> Bayne</h2>								
          </section>

          <div class="player-wrapper mb-4">
            <ReactPlayer
              url="https://youtu.be/JeqTXDiy7Xw"
              width="100%"
            />
          </div>

          <article class="module__article container">
            <h3 class="h4 module__article__title">Module 3! This is for ME!</h3>
            <p class="module__article__text serif-stack">
            We are filling in the gap between where you are now, and where you want to be! 
            </p>
            <p class="module__article__text serif-stack">
            Grab your Module  3 Workbook here and get ready to roll! 
            </p>
            <p class="lead font-weight-bold">
              <a class="text-brand text-underline" href="https://drive.google.com/open?id=0B_Skb-DqpicqQ2taUFRSZDFrU1E">MODULE 3 WORKBOOK</a>
            </p>
          </article>
        </div>
        `)
      },

      2: {
        title: 'My DISC Index',
        type: 'tool',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #1: Let’s Make Some Plans</h1>
              <h2 class="h3 module__article__title">What's My Plan?</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">"Often, we spend more time planning our vacations than our lives."</p>
              <footer class="blockquote-footer"><cite title="Jim Rohn">Jim Rohn</cite></footer>
            </blockquote>

            <p class="module__article__text serif-stack">
            Holy moly! It is time to create your plan! This is exciting work - if you start to feel overwhelmed, or anxious - read your transition story out loud, and take a deep breath.  YOU CAN DO IT.   Your dream life is already becoming reality!
            </p>

            <p class="module__article__text serif-stack">
            You’ve identified where you are starting from and have a clear vision of where you want to go. It's now time to plan how you're going to get there - and then TAKE ACTION!
            </p>

            <p class="module__article__text serif-stack">
            Success comes from DOING, not wanting, thinking or complaining. 
            </p>
           
            <p class="module__article__text serif-stack">
            Remember that progress does not mean perfection - so commit to the journey and take the next step, and the one after that, and the one after that.
            </p>
            <p class="module__article__text serif-stack">           
            You will face challenges, set-backs, obstacles and detours. Embrace them! They exist to teach you something you need to learn.
            </p>
           
           BUCKLE IN! WE'RE ABOUT TO TAKE OFF! 

          <hgroup class="mb-3">
           <h1 class="h2 module__article__title">R (Reflect)</h1>
           <h2 class="h3 module__article__title">What Do You Want?</h2>
          </hgroup>

          <p class="module__article__text serif-stack">           
           You've discovered where you are and have imagined where you want to go. Now, it's time to create the  plan and concrete action steps to make it happen! 
          </p>
          <p class="module__article__text serif-stack">           
           Refer back to your My 1Life Portrait. With this magnificent future vision in your mind, think about what you would like to have happen <strong>in the next 10 years</strong>.
          </p>
          <p class="module__article__text serif-stack">
           Close your eyes for a few moments as you visualize the future events you’d like to experience.
          </p>
          <p class="module__article__text serif-stack">
           Write down your thoughts in your workbook on page 3. 
          </p>
          
          <hgroup class="mb-3">
           <h1 class="h2 module__article__title">O (Observe)</h1>
           <h2 class="h3 module__article__title">Start with Your Vision and Work Backward!</h2>
          </hgroup>

          <h3 class="h5 module__article__title">Choosing 1 Year, 5 Year, and 10 Year Goals</h3>
           
          <div class="player-wrapper mb-4">
           <ReactPlayer
             url="https://youtu.be/6chi__tIMKo"
             width="100%"
           />
         </div>
          
        <hgroup class="mb-3">
          <h1 class="h2 module__article__title">A (Act)</h1>
          <h2 class="h3 module__article__title">Choose Your Goals!</h2>
        </hgroup>

        <p class="module__article__text serif-stack">
        Choose what you want to accomplish over the next 1, 5, and 10 years.  Don't worry about the how, yet.  Just set goals that will make you stretch and grow, and that will make the most difference in your 1Life Fully Lived.
        </p>
        <p class="module__article__text serif-stack">
        Complete the chart on  page 5 using the video as an example.
        </p>

        <hgroup class="mb-3">
          <h1 class="h2 module__article__title">D (Decide)</h1>
        </hgroup>

        <p class="module__article__text serif-stack">
          Where Do You Want to Be 1 Year From Today?
        </p>
        <p class="module__article__text serif-stack">
          You've broken down and organized your Magnificent Future into 10, 5 and 1 year goals. You've brainstormed all that you would like to have in each of those time frames.
        </p>
        <p class="module__article__text serif-stack">
          Now, it is time to focus in on your 1 year goals.
        </p>
        <p class="module__article__text serif-stack">
          Choose your top 3 goals for this year and write them in your workbook on page 6.
        </p>
        <p class="module__article__text serif-stack">
          Helpful hint: Think back to the Big Rocks visualization in module 2 - you may find it helpful to think of this activity like choosing your 3 big rocks for this year. 
        </p>
          
        <p class="module__article__text serif-stack">
          <em>JUST FOR FUN:  This is Tim's Five Year Vision that he wrote back in 1997. It's very detailed  which you may choose to do .  We thought it was pretty neat and wanted to share with you.  And, by the way, everything he wrote happened - that's the power of having a dream and a plan - and taking action!</em>
        </p>

        <p class="lead font-weight-bold">
          <a class="text-brand text-underline" href="http://my1liferoadmap.1lifefullylived.org/wp-content/uploads/2016/07/Tims1997Dream.pdf">See Tim's Vision</a>
        </p>           
      `
      },
      3: {
        title: 'Tool #2: 1 Year Plan',
        type: 'tool',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #2: 1 Year Plan</h1>
              <h2 class="h3 module__article__title">What Will You Accomplish THIS YEAR?!</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">"Setting S.MA.R.T. goals is the first step in turning the invisible into the visible."</p>
              <footer class="blockquote-footer"><cite title="Og Mandino">Og Mandino</cite></footer>
            </blockquote>

            <p class="module__article__text serif-stack">
            The most effective plan to achieve your goals includes concrete dates, guidelines and strategies.
            </p>
            <p class="module__article__text serif-stack">
            When you are clear with your intention and identify the action steps necessary to accomplish your goals -  you set yourself up for success.
            </p>
            <p class="module__article__text serif-stack">
            Dates are like targets, because dates give you something to aim for and strive to reach. Action steps are like the ammo for your rocket - you need to launch a few rockets at the target before you can expect to hit it!
            </p>
            <p class="module__article__text serif-stack">
            As you take consistent action and keep the faith, you will hit the target. Sometimes you or the target will need to adjust, and that is okay. You will learn what you need to do as you practice.
            </p>
            <p class="module__article__text serif-stack">            
            Life is a big practice. You are always learning and evolving - embrace it! 
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">You CAN Do Anything!  Everything IS Possible.</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            You have everything you need to  be successful!  It may not feel like it sometimes, but you CAN make anything happen! You are perfect exactly the way you are!
            </p>
            <p class="module__article__text serif-stack">
            Your future vision belongs to you.
            </p>
            <p class="module__article__text serif-stack">
            Remember your deepest WHYs from Module 2.
            </p>
            <p class="module__article__text serif-stack">
            Review your Top 3 Rocks.
            </p>
            <p class="module__article__text serif-stack">
            Remind yourself WHY you want to create your amazing vision, and that no matter what - you deserve to make it happen. You are so worthy.
            </p>
            <p class="module__article__text serif-stack">
            You are a special person with so much to give to this world! You wouldn't be taking this class if it wasn't true. 
            </p>
            <p class="module__article__text serif-stack">
             Answer the questions on page 7 of your workbook to reconnect with your purpose and propel you forward.
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3 module__article__title">Video 3: S.M.A.R.T. Goals</h2>
            </hgroup> 

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/Vgb15nBDNBg"
                width="100%"
              />
            </div>
             
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Create Your S.M.A.R.T. Goals</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            It is time to create your own S.M.A.R.T. Goals!
            </p>
            <p class="module__article__text serif-stack">
            You may wish to circle back to the top 3 rocks you identified in Module 2 or use your 1 year goals from the last lesson. Either way, create your own S.M.A.R.T. goals for each of the 3!   (We suggest you stick with 3 goals for now - too many goals can create confusion and make things harder than they need to be.)
            </p>
            <p class="module__article__text serif-stack">            
            Important note: Not only will this exercise give you clarity and accountability, but it will also train your brain to seek out ways to achieve these goals because of your deliberate focus and direction. It is literally like punching an address into a GPS and following the directions. You still need to get up and travel the distance but you will have a clear guide where to go.
            </p>

            <hgroup class="mb-3">
              <h3 class="h4 module__article__title">SMART GOALS:</h3>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            <strong>Specific</strong> - answers who, what, where, when, which. why
            </p>
            <p class="module__article__text serif-stack">
            <strong>Measureable</strong> – needs to be a finish line, how will you know you made it?
            </p>
            <p class="module__article__text serif-stack">
            <strong>Attainable</strong> – willing and able to accomplish the goal
            </p>
            <p class="module__article__text serif-stack">
            <strong>Relevant</strong> – connects back to your why
            </p>
            <p class="module__article__text serif-stack">
            <strong>Timely</strong> – anchor goal with an “accomplish by date”
            </p>
            <p class="module__article__text serif-stack">
            READY?!  Now follow the prompts in the chart on page 9 and 10 in your workbook and create your SMART goals!
            </p>

            <hgroup class="mb-3">
              <h3 class="h4 module__article__title">D (Decide)</h3>
              <h4 class="h5 module__article__title">Print and Post Your Goals NOW</h4>
            </hgroup>

            <p class="module__article__text serif-stack">
            Celebrate!
            </p>

            <p class="module__article__text serif-stack">
            You've just accomplished what 90% of the world will never do - create written goals for their future.  Just the act of writing your goals gives them wings!
            </p>
            <p class="module__article__text serif-stack">
            Post your goals all around your environment so you are constantly exposed to them right NOW! 
            </p>
            <p class="module__article__text serif-stack">
             Stick them next to your WHY - on your fridge, your bathroom mirror or beside your bed. Constantly seeing your target keeps your focus exactly where it needs to be to hit the target!
            </p>
          </article>
        </div>
        `
      },

      4: {
        title: 'Tool #3: Putting It All Together',
        type: 'tool',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #3: Putting It All Together</h1>
              <h2 class="h3 module__article__title">Actions and Habits</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">"We are what we repeatedly do.
              Excellence, then, is not an act but a habit."</p>
              <footer class="blockquote-footer"><cite title="Aristotle">Aristotle</cite></footer>
            </blockquote>

            <p class="module__article__text serif-stack">
            The choices you make everyday can lead you to success or hold you back. To set yourself up for success, do the right things daily, and you'll  move  forward toward your chosen destination.
            </p>
            <p class="module__article__text serif-stack">
            It's kind of like eating an elephant! You start with one small bite. It's the same for reaching your 1Life Fully Lived. You must take small daily steps, actions and habits to reach your desired destination.
            </p>
            <p class="module__article__text serif-stack">
            Success is made up of a lot of repetition, and consistent steps taken daily, weekly and monthly.  It may not sound like much, but every little step adds up. The wrong habit done consistently can lead you down a very opposite path then the one you envisioned.
            </p>
            <p class="module__article__text serif-stack">
            It's time to establish some positive actions and habits!
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">Check-in!</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
            Whew! You've done a ton of work up until this point.
            </p>
            <p class="module__article__text serif-stack">
            Take a moment to consider all you've accomplished since you started in Module 1.
            </p>
            <p class="module__article__text serif-stack">
            How are you doing? What is coming up for you?
            </p>
            <p class="module__article__text serif-stack">
            Fill in the chart on page 12 of your workbook to reflect on the actions you've taken this far and what you've learned through the process.
            </p>
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3 module__article__title">Breaking Goals Down into Actions and Habits</h2>
            </hgroup>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/Vgb15nBDNBg"
                width="100%"
              />
            </div>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Creating Habits</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            To move your life forward in a positive direction, get clear on the daily actions  and  habits you need to start doing, (and those you need to STOP doing)!  When your days are purpose-driven and effective, you'll create massive momentum in your life to propel you down the ROAD.
            </p>
            <p class="module__article__text serif-stack">
            Download the Habit Sheet below and choose the necessary habits you need to incorporate into your life. You may also choose to download the exact sheet used in the video by downloading the Legendary Life Planner found in My 1Life Roadmap Facebook group.
            </p>
            <p class="module__article__text serif-stack">
            Circle back to the video and follow along if necessary while you create your own list!
            </p>
            <p class="lead font-weight-bold">
              <a class="text-brand text-underline" href="https://drive.google.com/open?id=1k8Kvi6t5CZXSuiU_DkzrnWRF_vw2_DXQ">See the habits sheet</a>
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h3 module__article__title">Do Something Right NOW!</h2>
            </hgroup>
            <p class="module__article__text serif-stack">
            Do something today!  NOW!
            </p>
            <p class="module__article__text serif-stack">
            It can be sending an e-mail, making a call or something even bigger. Just do something!!
            </p>
            <p class="module__article__text serif-stack">
            Write it down in your workbook on page 15 and share this commitment in our Facebook group, and/or with your accountability buddy!
            </p>
          </article>
          <article class="module__article container mb-5">
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        </div>
      `
      },
      5: {
        title: 'My Plan4Me Wrap up',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">My Plan4Me Wrap up</h1>
              <h2 class="h3 module__article__title">WRAP UP</h2>
            </hgroup>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/Ui7CfVUGOx0"
                width="100%"
              />
            </div>
          </article>
        </div>
        `
      },
      6: {
        title: 'Next Time…',
        type: 'lesson',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Next Time…</h1>
            </hgroup>

            <h3>Next Time...</h3>
            <p class="module__article__text serif-stack">
            Financial Offense is the focus of the next Module!
            </p>
            <p class="module__article__text serif-stack">
            Countless celebrities make and squander millions, only to spend their “golden years” broken and penniless. Fortunately there are many more people who have learned to turn an “average” salary into lasting wealth simply by setting income goals, managing their expenses and investing wisely.
            </p>
            <p class="module__article__text serif-stack mb-4">
            So, how do you develop wealth? It really comes down to two simple things:
            </p>

            <p class="module__article__text serif-stack font-weight-bold">
            1. Spend LESS than you EARN.
            </p>
            <p class="module__article__text serif-stack font-weight-bold mb-4">
            2. Pay Yourself FIRST, (10% or more), to save for your future.
            </p>

            <p class="module__article__text serif-stack mb-4">
            It really is that easy. Think of it as prioritizing rather than missing out. After all, by saving and creating a wealthy mindset you will ultimately be missing out on a whole lot of debt! And there is nothing more depressing than to be overwhelmed with debt.
            </p>
            <p class="module__article__text serif-stack mb-4">
            If you want to have choices in your life, you need a clear financial plan that will give you the power to make decisions based on wants, not needs.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Just like planning your life, your financial planning begins with assessing where you are now.
            </p>
            <p class="module__article__text serif-stack mb-4">
            In Financial Offense, you'll gain a better understanding of your relationship with money, understand exactly where you are financially right now, and explore ways to increase your income so you'ree better prepared to fund your journey!
            </p>
          </article>

          <article class="module__article container mb-5">
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        `
      }
    }
  },
  'financial-offense': {
    id: 4,
    title: 'Module 4: Financial Offense',
    content: (
      `<section class="row mb-3">
        <div class="col-12">
          <article class="module__article">
            <h1 class="h3 module__article__title">Module 4: Financial Offense</h1>
            <p class="module__article__text serif-stack">
              Countless celebrities make and squander millions, only to spend their “golden years” broken and penniless.  Fortunately there are many more people who have learned to turn an “average” salary into lasting wealth simply by setting income goals, managing their expenses and investing wisely.
            </p>
            <p class="module__article__text serif-stack mb-4">
            So, how do you develop wealth? It really comes down to two simple things:
            </p>

            <p class="module__article__text serif-stack font-weight-bold">
            1. Spend LESS than you EARN.
            </p>
            <p class="module__article__text serif-stack font-weight-bold mb-4">
            2. Pay Yourself FIRST, (10% or more), to save for your future.
            </p>

            <p class="module__article__text serif-stack mb-4">
            It really is that easy. Think of it as prioritizing rather than missing out. After all, by saving and creating a wealthy mindset you will ultimately be missing out on a whole lot of debt! And there is nothing more depressing than to be overwhelmed with debt.
            </p>
            <p class="module__article__text serif-stack mb-4">
            If you want to have choices in your life, you need a clear financial plan that will give you the power to make decisions based on wants, not needs.
            </p>
            <p class="module__article__text serif-stack mb-4">
            It all begins with assessing where you are now and planning where you need to go.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Financial Offense is the focus of this Module.  You will have a better understanding of your relationship with money, a clear picture of exactly where you are financially, and you will explore ways to increase your income so you are better prepared to fund your journey!
            </p>
          </article>
        </div>
      </section>`
    ),
    nextModule: 'financial-defense',

    lessons: {
      1: {
        title: 'Welcome to Finances!',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Welcome to Finances!</h1>
              <h2 class="h3 module__article__title">Financial Focus</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            Welcome to the financial focal part of the course!
            </p>
            <p class="module__article__text serif-stack mb-4">
            The next two modules will walk you through the basics of managing your personal finances so you CAN fund your magnificent 1Life!
            </p>
            <p class="module__article__text serif-stack mb-4">
            Personal finance is often the area that causes the most stress and anxiety for the majority of people - so if you are in this boat -you're in good company, and we've designed this information just for you!  If you have a pretty good handle on your finances already, congratulations!  Just keep an open mind during these two modules - you never know what might just fall in!
            </p>
            <p class="module__article__text serif-stack mb-4">
            Either way, remember that, as with everything in life, changing your financial situation takes time.  Be patient with the process. Commit to the consistency throughout the process and pay close attention to the insights you discover in this class.
            </p>
            <p class="module__article__text serif-stack mb-4">
            When APPLIED, this information has the potential to help you create true financial freedom!
            </p>
            <p class="module__article__text serif-stack mb-4">
              <em>Disclaimer: we are not Financial Planning Professionals. We offer content, suggestions, insights and practical tools to enhance your knowledge about your own finances. We are not responsible for any outcomes that may arise from taking action with your finances and do not recommend anything specific for you. If you have questions, concerns or anything else concerning money management,  consult a professional.</em>
            </p>
            <p class="module__article__text serif-stack mb-4">
            <em>What we DO advocate is being accountable for your financial situation.  You have the power to create wealth as you define it!</em>
            </p>

            <section class="container">
              <h3 class="h5 module__article__title">Kickstart Video with Jenna <i>"Seuss"</i> Bayne</h3>
            </section>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/4poL4LRRlVg"
                width="100%"
              />
            </div>
            <h4 class="h5 module__article__title">Module 4 Is At Your Door</h4>
            <p class="module__article__text serif-stack mb-4">
            Get ready to take control of your finances by becoming financially literate and confident.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Download your workbook now and let's dig in.
            </p>
          </article>
          <p class="lead font-weight-bold">
            <a class="text-brand text-underline" href="https://drive.google.com/open?id=0B_Skb-DqpicqQmRtMFd6SDlnRlk">See Module 4 Workbook</a>
          </p>
        </div>
        `
      },
      2: {
        title: 'Welcome to Finances!',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Welcome to Finances!</h1>
              <h2 class="h3 module__article__title">Financial Focus</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">
              “I am open and ready to attract abundance in my life.”</p>
              <footer class="blockquote-footer"><cite title="Epicurus">Epicurus</cite></footer>
            </blockquote>
            <p class="module__article__text serif-stack">
            You are in a relationship with money,  just like you are in a relationship with everything in your life. You hold particular beliefs, behaviors and habits that either foster a positive, solid and healthy relationship or a less-than-optimal attachment with money.
            </p>
            <p class="module__article__text serif-stack">
            It's important to note there are no perfect relationships! This is what makes life so exciting, and this is true about your financial connection as well. Variance allows for growth because it identifies what you really want and what you are continuing to aim for.
            </p>
            <p class="module__article__text serif-stack">
            This lesson will help you develop an understanding of how you relate to money.  Next, you'll learn ideas to make and keep more money,  and then how to invest it and use it in ways that will enhance your life, and others, too!
            </p>
            <p class="module__article__text serif-stack">
            So, let's get started!
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">Step 1: My Financial Starting Point</h2>
            </hgroup>
            <p class="module__article__text serif-stack mb-4">
            The Five Levels of Financial Freedom can help orient you on the path to freedom. Read the following statements.  Reflect on where you are now on this scale and note your thoughts in your workbook on page 3.
            </p>

            <h4 class="module__article__title">The Five Levels of Financial Freedom</h4>

            <p class="module__article__text serif-stack">
            <strong>Level 1: Financial Rookie:</strong> No real financial knowledge; just starting out on your financial path with no clear idea where you stand or what to do financially to maximize your income and start saving. Or, you have been going a while but find yourself starting to accumulate debt.
            </p>
            <p class="module__article__text serif-stack">
            <strong>Level 2: Financial Apprentice:</strong> Starting to make some money, but have little or no retirement, no savings and not very savvy about investing. You may be strapped with debt and in a big hole you need to dig out of.
            </p>
            <p class="module__article__text serif-stack">
            <strong>Level 3: Financial Journeyman:</strong> Have a solid retirement in place, extra money coming in, basic investing knowledge; not sure how to take advantage of where you are and need a long-term plan.
            </p>
            <p class="module__article__text serif-stack">
            <strong>Level 4: Financial Star:</strong> Have some passive investments, maybe own your own business, strong retirement in place; have not reached critical mass; good plan in place for your future retirement.
            </p>
            <p class="module__article__text serif-stack">
            <strong>Level 4: Financial Superstar:</strong> Have reached critical mass (passive income is well more than monthly expenses) and choose to work if you wish. All “work” and investments now are for fun and pleasure only. ‘Your financial ship has come in”
            </p>
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">Step 2: Relationship with Money Quiz</h2>
            </hgroup>
            <p class="module__article__text serif-stack mb-4">
            Find out what your relationship with money is like by taking this short, insightful quiz. Using your results from this quiz, answer the questions on page 4 of your workbook. 
            </p>
            <p class="lead font-weight-bold">
              <a class="text-brand text-underline" href="https://www.moneyharmony.com/moneyharmony-quiz">Take the Quiz</a>
            </p>


            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3 module__article__title">Video 2: MONEY BLOCKS</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            Financial Mindset Coach, Tonya Rineer, discusses the 3 most common "money blocks" people experience, and tangible actions steps on how to break free from them. Take notes on page 5 of your workbook. 
            </p>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/ZwRik2IxTDg"
                width="100%"
              />
            </div>
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Honest Truth Time - What Are Your Money Stories?</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Your beliefs about money may be empowering or limiting.  If you have a healthy relationship with money, that's fantastic!  Consider sharing what you have learned with others - since most people have money blocks.
            </p>
            <p class="module__article__text serif-stack">
            Money blocks <em>prevent you from moving forward and achieving your financial goals.</em>
            </p>
            <p class="module__article__text serif-stack">
            In the video, Tonya identified 3 common money blocks. Do any of them resonate with you?
            </p>
            <p class="module__article__text serif-stack">
            Now, you're going to identify your money stories.
            </p>
            <p class="module__article__text serif-stack">
            If they are preventing you from getting where you really want to go, it's worth taking the time to connect with them so you can begin to re-write them so they support you on your journey.  This is completely possible once you know what they are!
            </p>
            <p class="module__article__text serif-stack">
            Your relationship with money requires the same commitment and heartfelt attention you dedicated to creating and planning your dream life.
            </p>
            <p class="module__article__text serif-stack">
            Take a few deep breaths, relax and think about your responses to the questions below. 
            </p>
            <p class="module__article__text serif-stack">
            As you do, tune into your body.  What do you feel physically?   What comes up for you mentally, emotionally and spiritually?  Do you feel tightness? Anxiety? Fear?  Be open and don't judge any of your responses.  Just note them.  Accept them.  They exist to protect you.
            </p>
            <p class="module__article__text serif-stack">
            What do you believe to be true about money?
            </p>
            <p class="module__article__text serif-stack">
            Is money hard to come by or does it flow to you easily and effortlessly? 
            </p>
            <p class="module__article__text serif-stack">
            Are you an ever abundant source of prosperity? 
            </p>
            <p class="module__article__text serif-stack">
            Are you an ever abundant source of prosperity?
            </p>
            <p class="module__article__text serif-stack">
            Is money a source of pleasure or of pain?
            </p>
            <p class="module__article__text serif-stack">            
            Do you have to be unkind to be rich?
            </p>
            <p class="module__article__text serif-stack">            
            Think of all the beliefs, sayings and examples you hold concerning money. What is your money story?
            </p>
            <p class="module__article__text serif-stack">
            Write it down on page 6 in workbook.
            </p>
            <p class="module__article__text serif-stack">
            <em><strong>However you choose to do this activity, please, do yourself a favor and don't skip this!  If you are resistant - explore why that may be...  Resistance is always a sign that you are heading in the right direction! </strong></em>
            </p>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h3 module__article__title">Financial Objectives</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            The Financial Objective Chart on page 7 in your workbook can help you elevate the money story you just empowered yourself with. Read through the list. This is the freedom money offers you.
            </p>
            <p class="module__article__text serif-stack">
            Money allows you to show up in the world as the superstar you are, and serve the world in the way you are meant to. You deserve all that is here.
            </p>
            <p class="module__article__text serif-stack">
            As you read through the list, choose what is important to you right now.  Decide what is important for your future.   Add at least two other financial objectives you have now, or in the future. 
            </p>
            <p class="module__article__text serif-stack">
              <em>
            If you have a spouse or partner in any capacity (roommate, business partner, etc) this is a great exercise to do with them so you can each learn what is important to you both.  
              </em>
            </p>
            <p class="module__article__text serif-stack">
            <em>
            You may want to check in with someone on your personal board of directors to work through your thought process and make sure you're seeing the whole picture.
            </em>
            </p>
          </article>
        </div>
        `
      },
      3: {
        title: 'Tool #2: Welcome to Finances!',
        type: 'tool',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #2: My Financial ABCs</h1>
              <h2 class="h3 module__article__title">Where Are You NOW, Financially?</h2>
            </hgroup>
  
            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">
              “One of the most critical steps in the pursuit of your dreams is having your financial house in order.”</p>
              <footer class="blockquote-footer"><cite title="Anonymous">Anonymous</cite></footer>
            </blockquote>
            <p class="module__article__text serif-stack">
            Expenses, liabilities, assets, investing, taxes, budgeting, income, net worth - so many things fall under the topic of money! It's easy to be overwhelmed, stressed and anxious,  as well as excited, hopeful and inventive when it comes to finances.
            </p>
            <p class="module__article__text serif-stack">
            Your personal finances may feel daunting and overwhelming, or you may be thinking, "I already know this stuff!"  Or somewhere in between.
            </p>
            <p class="module__article__text serif-stack">
            No matter where you are in terms of your financial knowledge, take a deep breath and be excited about all the things money can do for you, and allow you to do for others. Mastering the financial basics will change your financial trajectory in the most positive way. Give it all you have and be open to asking questions, absorbing all you can and utilizing the nuggets of wisdom you'll learn. 
            </p>
            <p class="module__article__text serif-stack">
            No matter where you are in terms of your financial knowledge, take a deep breath and be excited about all the things money can do for you, and allow you to do for others. Mastering the financial basics will change your financial trajectory in the most positive way. Give it all you have and be open to asking questions, absorbing all you can and utilizing the nuggets of wisdom you'll learn.
            </p>
            <p class="module__article__text serif-stack">
            So, pay attention!
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">Mastering Your Finances</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Finance is the business of your life. Treat it that way.
            </p>
            <p class="module__article__text serif-stack">
            Begin by reading the statements in your workbook on page 8.
            </p>
            <p class="module__article__text serif-stack">
            Without judgement, carefully consider your level of understanding of each of the financial statements. Make personal notes of things you do not understand, the parts you want to make sure you remember and any other notes that come up for you as you read them.
            </p>
            <p class="module__article__text serif-stack">
            Remember, if this feels overwhelming, complicated or boring commit to completing the exercise to the best of your ability.
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3 module__article__title">Video 3: My Financial ABCs</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            Financial Expert, Tyler McBroom, discusses the importance of knowing your financial ABC's.
            </p>
            
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/duohUY9541U"
                width="100%"
              />
            </div>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Step 1. Video 4: 1Life Balance Sheet</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Okay, so you're ready to master your financial game, right?  Watch the video, then download your balance sheet below. 
            </p>
            
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/E24cCsZEAyQ"
                width="100%"
              />
            </div>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Step 2. Complete My 1Life Balance Sheet</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            To win the money game, it's critical to keep track of what comes in and what goes out.
            </p>
            <p class="module__article__text serif-stack">
            Most people play this part poorly.
            </p>
            <p class="module__article__text serif-stack">
            Do you know why only 5% of people in America hold 95% of its wealth?
            </p>
            <p class="module__article__text serif-stack">
            The answer might surprise you, but the key is: Live within your means!  It's really is as simple as that.
            </p>
            
            <h4 class="h5 module__article__title">Completing Your 1Life Financial Balance Sheet - Written Guidelines</h4>
            <p class="lead font-weight-bold">
              <a class="text-brand text-underline" href="https://drive.google.com/open?id=17e6t-ZG6FS4b6uK15_sAwBBMySPmTWG9">1Life Balance Sheet(xls)</a>
            </p>
            <p class="module__article__text serif-stack">
              1. Record all your <em><strong>Assets</strong></em> – things you own. There are several categories to think about including <em>Personal Property</em>, <em>Real Estate</em>, <em>Taxable Assets</em>, and <em>Retirement Accounts</em>.  Use their current value for this inventory.
            </p>
            <p class="module__article__text serif-stack">
            2. List your <em><strong>Liabilities</strong></em> – things you owe. These are usually loans and credit cards.
            </p>
            <p class="module__article__text serif-stack">
              <em><strong>3. Calculate your Net Worth by subtracting your Liabilities from your Assets.</strong></em>
            </p>
            <p class="module__article__text serif-stack">
            The balance sheet serves as a financial "snap shot" to help you understand exactly where you are financially at any given point. Many people adjust and review their balance sheet monthly, so they can continue to correct their course as needed and stay on track.  
            </p>
            <p class="module__article__text serif-stack">
              <em>Remember, the more accurate your numbers are, the better this activity will serve you, so dig out those statements and invoices, and use ACCURATE numbers!  (You know what they say about "garbage in - garbage out"!</em>
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h3 module__article__title">Plan for Your Future!</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            Consider what big-ticket items you may have coming up, how much they'll cost and when you plan to make the purchase.
            </p>
            <p class="module__article__text serif-stack">
            This is your future wish-list. These are all the foreseeable expenses that you anticipate and want to plan for down the line. 
            </p>

            <p class="module__article__text serif-stack">
              <ul>
                <li>Weddings</li>
                <li>College</li>
                <li>Down payment on home</li>
                <li>New (or used!) car</li>
                <li>Transmission</li>
                <li>Engagement ring</li>
              </ul>
            </p>

            <p class="module__article__text serif-stack">
            Fill in the savings chart on page 16 of your workbook now. 
            </p>
            <p class="module__article__text serif-stack">
            Helpful hint: Identifying these things allows you to plan for the future and set aside money each month now to make these things happen without using loans or credit cards. <strong>Never</strong> use credit until you consider how it will affect your financial plan <strong>AND</strong> write out how you will pay it off as soon as possible.
            </p>
        `
      },
      4: {
        title: 'Tool #3: Maximizing My Income',
        type: 'tool',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #3: Maximizing My Income</h1>
              <h2 class="h3 module__article__title">Handling the 'C'</h2>
            </hgroup>
  
            <p class="module__article__text serif-stack">
            As you now know, the equation A - B = C is critical in your financial game plan.
            </p>
            <p class="module__article__text serif-stack">
            The goal is to have 'C' be positive rather than negative. This happens when you maximize your A (earnings) and minimize your  B (expenses).
            </p>
            <p class="module__article__text serif-stack">
            This is exactly what offense is all about, increasing the A.
            </p>
            <p class="module__article__text serif-stack">
            There are many creative ways to increase the money flow coming in. However, it depends on what you are willing to do. This may require extra hours, creativity and dedication. You may have to give up watching the game with your buddies some nights of the week or change a few other parts of your routine.
            </p>
            <p class="module__article__text serif-stack">
            Then think about how you could increase your Financial Offense using the skills, talents and abilities you already possess.  
            </p>
            <p class="module__article__text serif-stack">
            The sky is the limit!
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">Last Year's Financial Overview</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Considering your financial journey last year, complete the chart on page 14 in your workbook.
            </p>
            <p class="module__article__text serif-stack">
            Take time with this to review where you succeeded and areas you feel you would like to improve. Recapping on your past helps us to understand and grow from where we are to where we want to go. Be honest and dig deep! 
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3 module__article__title">Video 5: Increasing Income Strategies</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            1Life Founder, Tim Rhode, shares some valuable insight on Financial Offense!
            </p>
            
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/zgaQyp-mwag"
                width="100%"
              />
            </div>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Video 6: Creating My Income Statement</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack">
            Financial Expert, Tyler McBroom, explains how to complete your Income Statement.
            </p>            
            
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/oOYkpDueFfI"
                width="100%"
              />
            </div>
            
            <p class="module__article__text serif-stack">
            Download My 1Life Financial Income Statement below, and spend time calculating your monthly and annual income. 
            </p>
            <p class="lead font-weight-bold">
              <a class="text-brand text-underline" href="https://drive.google.com/open?id=1j9cSGwm_0SvxcC4HhzRJcQExJRbjWoKa">My 1Life Financial Income Statement</a>
            </p>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h3 module__article__title">Earn More Today!</h2>
            </hgroup>

            <p class="module__article__text serif-stack">            
            What specific actions can you take NOW to earn more?  Sometimes we need to dig deep and find side work to make extra cash.
            </p>
            <p class="module__article__text serif-stack">
              <ul class="serif-stack">
                <li>Take an extra job</li>
                <li>Start a 2nd business</li>
                <li>Work overtime</li>
                <li>Take classes to get the next certificate</li>
                <li>Go back to school to start a new career</li>
                <li>Could you shovel snow, cut and sell firewood, do odd jobs, walk someone’s dog, house sit? Ever consider bartering—trade yard work for dental work, tutor for food, maintain and clean apartments in exchange for rent?</li>
              </ul>
            </p>
            <p class="module__article__text serif-stack">
            This is playing offense full out. Take time to enjoy life, but make sure you have all your players on the court and are pushing the ball hard to make your maximum financial score.
            </p>
            <p class="module__article__text serif-stack">
            Note: When you get that extra income, or a raise, or realize a return on an investment, don’t increase your expenses! This is hard to do. There are spenders everywhere with daily lattes, new cars, and great vacations. <em><strong>Many also have maxed out credit cards and have no savings and no retirement.</strong></em>
            </p>
            <p class="module__article__text serif-stack">
            Think of at least 3 things you could NOW!  Write them down on page 18 in your workbook!
            </p>
          </article>
        `
      },
      5: {
        title: 'Financial Offense: Wrap up',
        type: 'lesson',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">FINANCIAL OFFENSE: Wrap up!</h1>
            </hgroup>

            <h3 class="h2 module__article__title">WRAP IT UP!</h3>
            <p class="module__article__text serif-stack">
            Do you feel you have a good understanding about what financial offense is all about?
            </p>
            <p class="module__article__text serif-stack">
            It's about increasing your income using the skills, talents and opportunities that are already available to you!
            </p>
            <p class="module__article__text serif-stack">
            What are three key takeaways that you've discovered or have been reminded off during this lesson?
            </p>
            <p class="module__article__text serif-stack">
            There is space on page 20 for you to write them down under the weekly challenge section.
            </p>
            <p class="module__article__text serif-stack">
            What are you looking forward to when it comes your financial game?
            </p>
            <p class="module__article__text serif-stack">
            Next up we are looking into financial deeeeeefeenccee! Defense wins championships!
            </p>
          </article>

          <div class="player-wrapper mb-4">
            <ReactPlayer
              url="https://youtu.be/rNngtO4_KkY"
              width="100%"
            />
          </div>

            <article class="module__article container mb-5">
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        `
      },
      6: {
        title: 'Next Time…',
        type: 'lesson',
        content: `
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Next Time…</h1>
              <h2 class="h3 module__article__title">Module 5: Financial Defense!</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Financial Defense is all about growing your money; investing wisely, and protecting your principal to build real, lasting wealth over time. In this module, you will develop a clear understanding of how to effectively budget and invest, and understand how to best live within your means so you can maximize your financial future!  Whoo Hoo!
            </p>
          </article>
        `
      }
    }  
  },

  'financial-defense': {
    id: 5,
    title: 'Module 5: Financial Defense!',
    content: (
      `<section class="row mb-3">
        <div class="col-12">
          <article class="module__article">
            <h1 class="h3 module__article__title">Module 5: Financial Defense!</h1>
            <p class="module__article__text serif-stack">
            Financial Defense is all about growing your money; investing wisely, and protecting your principal to build real, lasting wealth over time. In this module, you’ll develop a clear understanding of how to effectively budget and invest, and understand how to best live within your means so you can maximize your financial future.
            </p>
          </article>
        </div>
      </section>`
    ),
    nextModule: 'fit-for-my-future',

    lessons: {
      1: {
        title: 'Introduction: Financial Defense',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Module 5: Financial Defense</h1>
              <h2 class="h3 module__article__title">MODULE 5: FINANCIAL DEFENSE</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            Either way, remember that, as with everything in life, changing your financial situation takes time.  Be patient with the process. Commit to the consistency throughout the process and pay close attention to the insights you discover in this class.
            </p>
          </article>
          <section class="container">
            <h3 class="h5 module__article__title">Kickstart Video with Jenna <i>"Seuss"</i> Bayne</h3>
          </section>
          <div class="player-wrapper mb-4">
            <ReactPlayer
              url="https://youtu.be/_eb69fLfKl4"
              width="100%"
            />
          </div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h4 class="h5 module__article__title">Module 5 will help your finances thrive!</h4>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            Download the workbook and get ready to walk away with tangible tools to fund your future.
            </p>
            <p class="lead font-weight-bold">
              <a class="text-brand text-underline" href="https://drive.google.com/open?id=0B_Skb-Dqpicqb0FSb2RjYVZLanc">See Module 5 Workbook</a>
            </p>
          </article>
          <article class="module__article container mb-5">
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        </div>
        `
      },
      2: {
        title: 'Tool #1: Creating a Budget!',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #1: Creating a Budget!</h1>
              <h2 class="h3 module__article__title">Defensive Strategies</h2>
            </hgroup>

            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">"Financial independence is your ability to live from your own personal resources."</p>
              <footer class="blockquote-footer"><cite title="Jim Rohn">Jim Rohn</cite></footer>
            </blockquote>

            <p class="module__article__text serif-stack mb-4">
            Financial Defense is all about growing your money, investing wisely, and protecting your principal to build real, lasting wealth over time.
            </p>
            <p class="module__article__text serif-stack mb-4">
            In this module, you'll develop a clear understanding of how to effectively budget and begin investing, and understand how to best live within your means so you can maximize your financial future.
            </p>
            <p class="module__article__text serif-stack mb-4">
            You'll focus on what we call  Financial  Defense, which means becoming competent, and consciously aware of your current financial position.  This is the most critical step to maximizing your future wealth.
            </p>
            <p class="module__article__text serif-stack mb-4">
            To successfully play the money game, it's imperative that you keep track of what comes in and what goes out. Most people play this part poorly.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Often, the only difference between being poor and being rich is as simple as this:  <strong>Live within your means!</strong>
            </p>
            <p class="module__article__text serif-stack mb-4">So, let's get started!</p>
            <p class="module__article__text serif-stack mb-4">
            <em>
            If you are planning your future with a spouse or significant other, you should complete this section together.  Many arguments, and ultimately divorces, have their roots in financial differences
            </em>
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">Video 2: Living Below Your Means</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack mb-4">
            The fastest way to accumulate money is to spend less than you earn.  Choose to live a modest lifestyle, be clear on your goals, budget and watch your spending habits. If and when you do start earning more money - save more - don't just spend it!
            </p>
            <p class="module__article__text serif-stack mb-4">
            Watch the video below as Tim describes how to effectively live below your means. Fill in the chart on page 3 of your workbook.
            </p>
            
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/VNf4olOeV2o"
                width="100%"
              />
            </div>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3 module__article__title">Video 3: Introduction to Budgeting</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            Financial Expert, Tyler McBroom, shares the ins and outs of how to create an effective budget.
            </p>
            
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/ocroe8jr06E"
                width="100%"
              />
            </div>
                        
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Complete Your Zero-Based Budget!</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            The concept of a zero-based budget is simple - add up all your income then subtract all your expenses and it should equal zero.
            </p>
            <p class="module__article__text serif-stack mb-4">
             If you earn $3,000 a month, you want every dollar that you spend/save/give/invest to equal $3,000. That way, you know where every one of your dollars is going.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Not knowing where your money goes is what kills a lot of peoples' money situations. They just look up one day, and they have no money—and no clue about where it went.
            </p>
            <p class="lead font-weight-bold module__article__text serif-stack mb-4">
            Download and Complete the Budget Worksheet, or create your own.
            </p>
            <p class="module__article__text serif-stack mb-4">
            1.  Identify all your income.  This includes paychecks, small-business income, side jobs, residual income, child support and so on. If it’s money that comes into your household’s bank account, write it down and tally it up.
            </p>
            <p class="lead font-weight-bold module__article__text serif-stack mb-4">            
            2. ADD A LINE ITEM UNDER EXPENSES FOR YOUR SAVINGS.  THIS SHOULD BE A FIXED EXPENSE.  The first "bill" you pay every single month.  
            </p>
            <p class="module__article__text serif-stack mb-4">
            3. Write down every single expense you have each month:  rent or mortgage, food, cable, phones, and everything in between.
            </p>
            <p class="module__article__text serif-stack mb-4">
            3.  Create "extra" categories for quarterly, bi-annual or annual expenses that you contribute a portion to monthly.  This can include taxes, travel, gifts, etc.
            </p>
            <p class="module__article__text serif-stack mb-4">
            4.  Once you have the income and outgo listed, don’t be shocked or worried if they don’t balance each other out.  Simply adjust numbers up and down so that every dollar is accounted for and has a "job" assigned to it.
            </p>
            <p class="module__article__text serif-stack mb-4">
            If you spend more than you make, then you need to make some cuts in order to make your income and outgo equal. To reduce expenses, try clipping coupons or catching a carpool to work. If you want to generate more money, get a second job or consider if there are things you can sell.
            </p>
            <p class="module__article__text serif-stack mb-4">
            5.  Don’t spend anything that’s not on that paper!! If you budget $100 for eating out and you’re already at $95.  Buy an apple or some pretzels, and call it good!  Or put the extra $5 into savings. <strong>Don’t spend in violation of your plan.</strong>
            </p>
            <p class="module__article__text serif-stack mb-4">
            The final thing to remember is that at first, <strong>you are the boss of the budget</strong>. Once it's made, the budget is the boss of you.
            </p>
            <p class="module__article__text serif-stack mb-4">
            You don’t need to think of it as a straitjacket; <strong>think of it as a guide.  It is there to serve you.</strong>
            </p>
            <p class="module__article__text serif-stack mb-4">
            It will lead you to the treasure, so stick with it.
            </p>

            <p class="lead font-weight-bold">
              <a class="text-brand text-underline" href="https://drive.google.com/open?id=1D9KWHMvf7UPl327R3i5tNkpqQKfdQFw9">Budget Worksheet</a>
            </p>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h3 module__article__title">Budget Satisfaction</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            You now have a clear depiction of what you're earning and where you're spending.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Take time looking for areas you can adjust, improve and/or eliminate to increase your financial wealth.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Answer the questions in your workbook on page 7.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Make a decision to take action to improve or enhance your financial situation and implement it this month, this week, today! 
            </p>
          </article>
        </div>
        `
      },
      3: {
        title: 'Tool #2: Debt Reduction and Investment Basics',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #2: Debt Reduction and Investment Basics</h1>
              <h2 class="h3 module__article__title">Make an Investment Plan</h2>
            </hgroup>
  
            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">"Small daily improvements are the keys
              to long-term positive results."</p>
              <footer class="blockquote-footer"><cite title="Anonymous">Anonymous</cite></footer>
            </blockquote>
  
            <p class="module__article__text serif-stack mb-4">
            Like we have said before, the business of your finances, is a life-long project. Living only for today will get you through today. But, what about all those tomorrows when you want to kick back and wallow in self-indulgence?
            </p>
            <p class="module__article__text serif-stack mb-4">
            You must remember: it's not what you make but what you keep and invest for your future that matters. The first 10% of what you make—not the little bit left over after the Super Bowl party, or the date with the girl/boyfriend, or the car repair—should be kept and invested wisely to create your magnificent future. Small choices add up and soon you’ll feel rich, which will help you to create even more momentum to achieve your goals. You can do this!
            </p>
            <p class="module__article__text serif-stack mb-4">
            If your "C" is negative then you will work with debt reduction first. Once your "C" is positive you will want to look into investing opportunities! If your "C" is already positive then jump right to investing.
            </p>
            <p class="module__article__text serif-stack mb-4">
            There are many ways to invest your money and make it work for you. Reading and connecting with professionals in this arena is a really great starting place to become fully competent and to make the right decisions. Knowledge applied is power. Find out the best ways you feel comfortable with handling your dollars. 
            </p>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">The Richest Man in Babylon</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            The Richest Man in Babylon is a book composed of various parables. It is a quick read and highly recommended to anyone wanting to Master their finances. Read it as you go through this lesson or prior too. If you do not have the book, you may do a quick search for a PDF summary to get the gist. Reading the book is preferred because of the enlightening and relatable stories. Once you are familiar with this resource and have spent time learning the valuable insights revealed in the chapters, answer the questions on page 8 of your workbook. 
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (observe)</h1>
              <h2 class="h3 module__article__title">Video 4:  Debt Reduction and Basic Investing</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack mb-4">
            Financial Expert, Tyler McBroom, guides you through debt reduction and basic investing principles.
            </p>
            
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/LW_eW_nbkU8"
                width="100%"
              />
            </div>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (act)</h1>
              <h2 class="h3 module__article__title">Reduce Your Debt</h2>
            </hgroup>
 
            <p class="module__article__text serif-stack mb-4">            
            First, if debt is stressing you out, breathe.
            </p>
            <p class="module__article__text serif-stack mb-4">            
            Just as you build a brick house one brick at a time, you'll tackle your debt one dollar at a time.  If you're consistent, you'll quickly see progress, and will feel better about being in control of your finances within 30-60 days!
            </p>
            <p class="module__article__text serif-stack mb-4">
            Download and complete the worksheet below to systematically reduce and eliminate debt following the " Debt Snowballing Method".
            </p>
            <p class="module__article__text serif-stack mb-4">
            Debt Reduction Worksheet
            </p>
            <p class="module__article__text serif-stack mb-4">            
            1.  List your debts in terms of smallest to largest "payoff".  For now, don't be too concerned with the interest rate, unless you have two debts the same. In that event, list the one with the highest interest rate first.
            </p>
            <p class="module__article__text serif-stack mb-4">
            2.  List the minimum monthly payments for each.
            </p>
            <p class="module__article__text serif-stack mb-4">
            3. Add an additional amount to the smallest debt so you can pay it off and set yourself up with a win!   Continue making the minimum payments on the rest of your debts - and put AS MUCH AS YOU CAN toward your smallest debt.  
            </p>
            <p class="module__article__text serif-stack mb-4">
            4. Once you've paid the first debt, take the full amount you were paying on that debt, and add it to the minimum amount on the second debt.  
            </p>
            <p class="module__article__text serif-stack mb-4">
            5.  Repeat the cycle until all your debt is eliminated!
            </p>
            <p class="module__article__text serif-stack mb-4">
            6.  Now take the full amount you were paying on your last debt - and put it into savings and begin to INVEST it!  Don't accrue more debt!
            </p>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">D (decide)</h1>
              <h2 class="h3 module__article__title">Video 6: Investing Wisdom</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            1Life Founder, Tim Rhode, gives you some valuable investing tips that he applied in his own life.
            </p>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/MIONVI8BDJw"
                width="100%"
              />
            </div>

            <p class="font-weight-bold module__article__text serif-stack mb-4">
            Tim mentions risk tolerance in the video.
            </p>
            <p class="module__article__text serif-stack mb-4">
            What is Your Risk Tolerance for Investing?  Take this quiz and find out!
            </p>
            <p class="module__article__text serif-stack mb-4">
            Then, reflect in your journal what the results of this quiz reveal!
            </p>
            
            <p class="lead font-weight-bold">
              <a class="text-brand text-underline" href="http://my1liferoadmap.1lifefullylived.org/wp-content/uploads/2016/09/Risk_Tolerance_Quiz.pdf">Risk Tolerance Quiz</a>
            </p>
            
            <h2 class="h3 module__article__title">
            Additional Resources to Support Your Financial Literacy
            </h2>

            <strong>BOOKS</strong>
            <p class="module__article__text serif-stack mb-4">            
            1. Richest Man in Babylon, George S. Clason
            </p>
            <p class="module__article__text serif-stack mb-4">            
            2. The Four Laws of Debt Free Prosperity, Blaine Harries and Charles Coonradt
            </p>
            <p class="module__article__text serif-stack mb-4">
            3. Think and Grow Rich, Napoleon Hill
            </p>
            <p class="module__article__text serif-stack mb-4">
            4. Stop Acting Rich, and Start Living Like a Real Millionaire, Thomas J Stanley PHD
            </p>
            <p class="module__article__text serif-stack mb-4">
            5. The Total Money Makeover, Dave Ramsey
            </p>
            <p class="module__article__text serif-stack mb-4">            
            Rule 1 Inventing, Phil Town
            </p>

            <strong>WEBSITES</strong>
            
            <ul>
              <li><a href="http://mint.com">Mint.com</a></li>
              <li><a href="http://updown.com">Updown.com</a></li>
              <li><a href="http://expenser.com">Expenser.com</a></li>
              <li><a href="http://kiplinger.com">Kiplinger.com</a></li>
          </article>
        </div>
        `
      },
      4: {
        title: 'Tool #3: Sprint and Marathon Plan',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Tool #3: Sprint and Marathon Plan</h1>
              <h2 class="h3 module__article__title">My 1Life Financial Plan</h2>
            </hgroup>
    
            <blockquote class="blockquote serif-stack">
              <p class="serif-stack font-weight-bold">"Most people don't plan to fail.
              They fail to plan"</p>
              <footer class="blockquote-footer"><cite title="John L. Beckley">John L. Beckley</cite></footer>
            </blockquote>
    
            <p class="module__article__text serif-stack mb-4">
            You're gaining control of your finances! Woohoo!
            </p>
            <p class="module__article__text serif-stack mb-4">
            And, as you apply what you've learned so far, you can expect constant evolution, growth and challenges.
            </p>
            <p class="module__article__text serif-stack mb-4">
            As long as you're intentional with your finances, and you tend to your relationship with money, you will stay on track. 
            </p>
            <p class="module__article__text serif-stack mb-4">
            In this lesson, you're going to connect your dream and your plan and put it all together!  Everything you've learned so far all comes together now as you learn to make your dreams come true!  
            </p>
            <p class="module__article__text serif-stack mb-4">
            Let's DO this!
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">R (Reflect)</h1>
              <h2 class="h3 module__article__title">Current Financial Satisfaction</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack mb-4">
            Think of everything you have done up until this point. You've done a marvelous job!
            </p>
            <p class="module__article__text serif-stack mb-4">
            Review your workbooks and all the things you've learned up to this point, paying close attention to your financial observations.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Moving forward, what financial habits do you want to implement into your daily, weekly or monthly routine? Record three financial habits you're committed to doing in your workbook on page 12!
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">O (Observe)</h1>
              <h2 class="h3 module__article__title">Video 7: Creating Your Sprint and Marathon Plans</h2>
            </hgroup>
            
            <p class="module__article__text serif-stack mb-4">
            Take notes on page 13 of your workbook as Financial Expert, Tyler McBroom, takes you through the importance and creation of both your sprint (short-term) plan and your marathon (long-term) plan for your finances.
            </p>
            
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/ca0F5EtD5Iw"
                width="100%"
              />
            </div>
            
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">A (Act)</h1>
              <h2 class="h3 module__article__title">Create Your Sprint and Marathon Plans!</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">
            Now that you know what your income and expenses are, and you've identified your financial goals, it's time to make a plan to set aside money each month now to make these happen without using loans or credit cards.
            </p>
            <p class="module__article__text serif-stack mb-4">            
            Never use credit until you consider how it will affect your financial plan AND write out how you will pay it off as soon as possible.
            </p>
            <p class="module__article__text serif-stack mb-4">
            Download and complete each financial plan, or use them as a guide for this activity.
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Sprint Plan Worksheet</h1>
              <h2 class="h3 module__article__title">Marathon Plan Worksheet</h2>
            </hgroup>
            
            
            <p class="module__article__text serif-stack mb-4">
            Being a strategic player in the game of finance sets you up to win!
            </p>
            <p class="module__article__text serif-stack mb-4">
            Draft your short-term and long-term priorities using all the resources you've explored!
            </p>
            <p class="module__article__text serif-stack mb-4">
            Here are some points to remember:
            </p>
            <p class="module__article__text serif-stack mb-4">
            1. This seems like a whole lotta’ information—and it is. Remember, you don’t have to tackle it all at once, and if something doesn’t apply to you then don’t worry about it! But, the key to successful Financial Planning is looking at the entire picture.
            </p>
            <p class="module__article__text serif-stack mb-4">
            2. Investing is part of the “business of running your life.” By researching and seeking out successful investors with a successful track record, you can maximize your risk/reward ratio and hopefully beat the odds.
            </p>
            <p class="module__article__text serif-stack mb-4">
            3. Think long, slow, steady progress. “Get rich quick” is a scam.
            </p>
            <p class="module__article__text serif-stack mb-4">
            <ul>
              <li>
                <p class="module__article__text serif-stack mb-4">
                Understand all the costs associated with buying, selling and managing your investments.
                </p>
                <ul>
                  <li>
                    <p class="module__article__text serif-stack mb-4">
                    Beware of investments that seem too good to be true—they probably are.
                    </p>  
                  </li>
                  <li>
                    <p class="module__article__text serif-stack mb-4">
                    Where are you lacking in knowledge?
                    </p>
                  </li>
                  <li>
                    <p class="module__article__text serif-stack mb-4">
                    Find good information/resources to help you make informed decisions.
                    </p>
                  </li>
                  <li>
                    <p class="module__article__text serif-stack mb-4">
                    4. Always ask yourself what extra things you can do <b>now</b> to make your future better.
                    </p>
                  </li>
                  <li>
                    <p class="module__article__text serif-stack mb-4">
                    5. When you get that extra income, or a raise, or realize a return on an investment, don’t increase your expenses! This is hard to do. There are spenders everywhere with daily lattes, new cars, and great vacations. <em>Many also have maxed out credit cards and have no savings and no retirement</em>.
                    </p>
                  </li>
                  <li>
                    <p class="module__article__text serif-stack mb-4">
                    <strong><em>6. You must learn to take care of the money you earn. This is what lets you live the life and do the important work that you choose to do. You must learn to set aside time each and every week to manage your finances. This is an ongoing process and critical to your future, and the future of those you love.</em></strong>
                    </p>
                  </li>
                </ul>
              </li>
            </p>

            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">D (Decide)</h1>
              <h2 class="h3 module__article__title">What Is Your Financial Target?</h2>
            </hgroup>

            <p class="module__article__text serif-stack mb-4">            
            How do you feel about your plans? Are you excited? Anxious? What are you most looking forward to?
            </p>
            <p class="module__article__text serif-stack mb-4">            
            1.  Identify one target goal for both your sprint and marathon financial plan, and do something today to move forward!
            </p>
            <p class="module__article__text serif-stack mb-4">
            2.  Record your goals on page 16 of your workbook!
            </p>
          </article>
        </div>
        `
      },
      5: {
        title: 'Module 5: Wrap up',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Module 5: Wrap up</h1>
              <h2 class="h3 module__article__title">Congratulations - You're Almost There!</h2>
            </hgroup>
                
            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/y8m_cROgkZM"
                width="100%"
              />
            </div>
            
            <hgroup class="mb-3">
              <h2 class="h3 module__article__title">Watch this great webinar from the 1LIFE VAULT!</h2>
            </hgroup>

            <p class="module__article__text serif-stack">
            Byron McBroom is Tyler's dad. Watch this webinar and you'll learn where Tyler's wisdom comes from! This webinar reviews some of what has already been covered in this lesson, and goes into more depth in several other areas of Personal Finance.
            </p>
            <p class="module__article__text serif-stack mb-4">
            If you can NAIL the 4 basics Byron shares, you WILL retire comfortably - and live your 1Life - fully!
            </p>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/OjZybQMF3uc"
                width="100%"
              />
            </div>

            <p class="module__article__text serif-stack mb-4">
            2.  Record your goals on page 16 of your workbook!
            </p>
          </article>
          <article class="module__article container mb-5">
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        </div>
        `
      },
      6: {
        title: 'Next Time…',
        type: 'lesson',
        content: `
        <div>
          <article class="module__article container mb-5">
            <hgroup class="mb-3">
              <h1 class="h2 module__article__title">Next Time…</h1>
              <h2 class="h3 module__article__title">MODULE 6: Fit for My Future</h2>
            </hgroup>                

            <p class="module__article__text serif-stack">
            Life is a marathon, and you need to fuel your body for mental clarity and maximum vitality to fulfill your purpose-driven journey. In the next module, you will learn the latest science on health and wellness so your body, mind, and soul can support you, your journey, and your dreams.
            </p>
          </article>
          <article class="module__article container mb-5">
            <p class="font-weight-bold">
              If you have questions about this lesson, write <a href="mailto:my1liferoadmap@1lifefullylived.org">my1liferoadmap@1lifefullylived.org</a>
            </p>
          </article>
        </div>
        `
      }
    },
  },

  'fit-for-my-future': {
    id: 6,
    title: 'Module 6: Fit For My Future!',
    content: (
      `<section class="row mb-3">
        <div class="col-12">
          <article class="module__article">
            <h1 class="h3 module__article__title">Module 6: Fit For My Future!</h1>
            <p class="module__article__text serif-stack">
            Life is a marathon, and you need to fuel your body for mental clarity and maximum vitality to fulfill your purpose driven journey. In this module, you will learn the latest science on health and wellness so your body, mind, and soul can support you, your journey, and your dreams.
            </p>
          </article>
        </div>
      </section>`
    ),
    nextModule: null,

    lessons: {
      1: {
        title: 'Fit For My Future!',
        type: 'lesson',
        content: (`          
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Fit For My Future!</h1>
                <h2 class="h5 module__article__title">Module 6: Fit For My Future</h2>
              </hgroup>
            </article>

            <section class="container">
              <h2 class="h5 module__article__title">Kickstart Video with Jenna <i>"Seuss"</i> Bayne</h2>								
            </section>

            <div class="player-wrapper mb-4">
              <ReactPlayer
                url="https://youtu.be/E8aqWkNxfEs"
                width="100%"
              />
            </div>

            <article class="module__article container">
              <h3 class="h4 module__article__title">Last module to go!</h3>
              <p class="module__article__text serif-stack">
              This is module 6; the last one in the mix! Download your final workbook below and head on over to the first lesson!
              </p>
              <p class="lead font-weight-bold">
                <a class="text-brand text-underline" href="https://drive.google.com/open?id=0B4KpNwL4PokNMXF1dmpRMXM3Tjg">Module 6 Workbook</a>
              </p>

              <blockquote class="blockquote">
                <p class="font-weight-bold">
                If you have questions about this lesson, contact us at <a href="mailto:info@1lifefullylived.org">info@1lifefullylived.org</a>
                </p>
              </blockquote>

            </article>
          </div>    
        `)
        },
        2: {
          title: 'Tool #1: Fuel for My Future',
          type: 'tool',
          content: `
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Tool #1: Fuel for My Future</h1>
                <h2 class="h3 module__article__title">Food is Your Life Force</h2>
              </hgroup>
    
              <blockquote class="blockquote serif-stack">
                <p class="serif-stack font-weight-bold">"The greatest wealth is health."</p>
                <footer class="blockquote-footer"><cite title="Virgil">Virgil</cite></footer>
              </blockquote>
    
              <p class="module__article__text serif-stack mb-4">
              Why do we eat?
              </p>
              <p class="module__article__text serif-stack mb-4">
              At the most basic level, we eat to survive. Every life force on this planet needs nourishment to live. Plants need sunlight, water, air and soil. Animals require water, protein, carbs and fats...even our cars need proper fuel to run.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Without proper fuel for an extended amount of time these things will perish. Thus, in order for your vehicle (your body) to make it through this roadmap journey,  you need to give it the highest quality fuel possible!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Think about it, what is it that you expect food to do for you? 
              </p>
              <p class="module__article__text serif-stack mb-4">
              If you expect food to provide you with energy, balance and satiety - you're on the right track!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Food is less about exact measurements of calories, grams or ounces and more about how it makes you feel. And everyone is different.  You may require more protein, or carbs, or fats, than others, it depends on your genetics, lifestyle, goals and environment. Embrace your uniqueness and stop seeking advice outside of you to figure out what your body needs. Instead, the knowledge you've learned about health, and combine it with your personal experience to find what YOUR body craves for optimal strength, mental clarity and exuberance!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Essentially, what you eat ultimately determines how your body functions. When the foods you eat are broken down through the digestive process, your internal system is massively affected.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Foods can cause inflammation in the body or stimulate an environment of health and healing. Your energy levels, moods and a wide variety of other functions are dramatically influenced by how you feed and fuel your body.
              </p>
              <p class="font-weight-bold module__article__text serif-stack mb-5">
                Being acutely aware of what you are consuming is the best way to learn how to achieve your greatest health!
              </p>
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">R (Reflect)</h1>
                <h2 class="h3 module__article__title">Health Symptoms</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              Your body is brilliant! It will tell you a lot if you learn how to listen to the messages it sends.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Skin impurities, digestive complaints, aches and pains, and other ailments are all messages your body is using to tell you that you are out of balance. We often ignore these symptoms or get so used to them, we pass them off as "normal" and choose to suffer with less than optimal conditions.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Begin this section by identifying any messages your body is sending you about your current state of health and vitality. Rate yourself in the Health Inventory Checklist found on page 3 and 4 of your workbook.
              </p>
              <p class="module__article__text serif-stack mb-4">
              After you complete the whole list, take note of all the symptoms you may be tolerating without even realizing it. Finish this section by identifying and writing down 3 health concerns, goals or commitments you intend to address on your roadmap journey.
              </p>
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">O (Observe)</h1>
                <h2 class="h3 module__article__title">Video 2: Food is Your Fuel</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              Flip to page 5 and 6 of your workbook to jot down any notes that come up for you as you watch the video below, and gain a better understanding of the fuel your body needs.
              </p>
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">O (Observe)</h1>
                <h2 class="h3 module__article__title">Video 2: Food is Your Fuel</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              Flip to page 5 and 6 of your workbook to jot down any notes that come up for you as you watch the video below, and gain a better understanding of the fuel your body needs.
              </p>
              <div class="player-wrapper mb-4">
                <ReactPlayer
                  url="https://youtu.be/s8Vtmg-4XeU"
                  width="100%"
                />
              </div>
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">A (Act)</h1>
                <h2 class="h3 module__article__title">Food Journal</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              This exercise may be one of the most game-changing exercises you will ever do for your energy and vitality! It's called a Food Journal!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Record EVERYTHING you consume (food or drink) and the time you consume it for 10 days. Also record how you feel before you consumed something, how you feel while you are eating and how you feel 2 hours after you finish eating it!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Here are the guidelines:
              </p>
              <p class="module__article__text serif-stack mb-4">
              1. For the first three days - don't change a thing. Just eat what you normally eat.
              </p>
              <p class="module__article__text serif-stack mb-4">
              2. Be honest and mindful with this practice. You may be tempted to only record the "healthy" foods you consume - but this in't the point! Don't judge what you eat.  Just record it.  You want an honest reflection of your nutrition for 10 days.  If you're eating take-out put it in your journal, if you're at a party, make your food journal a priority, and record it at your earliest convenience. [Hint: This journal may be something you want to print out if you do not have your device with you while you eat.]
              </p>
              <p class="module__article__text serif-stack mb-4">
              3.  After 3 days, if you feel inspired to change how you eat, go for it! You may want to focus on adding whole foods (foods you can find in nature), humanely grown meats and organic produce. You may want to reduce or eliminate packaged and processed foods found in the middle of the grocery store, and add more delicious nature food sources found in the outer sections.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Try new recipes at home and record how your body feels! Use different ingredients, spices, herbs and eat different amounts of protein, carbohydrates and fats and listen to the messages from your body.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Have fun with it!  Make it a family challenge or try it with your partner or a friend. You are a scientist, your body is the lab and your food intake is the experiment!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Be open and courageous to try something new.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Things you may choose to try on are as an extended challenge are:
              </p>
              <p class="module__article__text serif-stack mb-4">
              1. Eliminating a food group such as dairy, soy, gluten or any category of your choice. This is fascinating to see what you learn about you!
              </p>
              <p class="module__article__text serif-stack mb-4">
              2. Choose a particular style of eating like paleo, vegetarian, vegan, etc., for a week or so to see how you feel. 
              </p>
              <p class="module__article__text serif-stack mb-4">
              There are many options for you to think about and explore. Your health is your life force and you deserve to feel amazing everyday. You are worth this effort. The results you will receive will be magical if you do the work. DO NOT MISS OUT! DO THE WORK!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Download the Food Journal below and print out 10 or more copies.  Complete one every day for at least 10 days. Have fun with this experiment!
              </p>
              <p class="module__article__text serif-stack mb-4">
              (Of course, you may choose to use an app on a mobile device - it's your choice!)
              </p>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">D (Decide)</h1>
                <h2 class="h3 module__article__title">Commit to the Filling Out the Food Journal</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              The food journal may seem like a daunting task at first, but it is truly transformational!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Decide what format you will use and what ways you want to experiment with - removing a food group, eating only whole foods and nothing processed, etc.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Be excited! This is life changing. You will learn so much about what your body needs to thrive. Commit to completing your journal for at least 10 days!  Think about it, your homework is to eat food, how amazing is this?
              </p>
              <p class="module__article__text serif-stack mb-4">
              After you complete this activity, come back to page 9 every few days and document what you discover about YOU. Ask for support, clarity and share your insights with us in the Facebook Group!
              </p>
              <p class="module__article__text serif-stack mb-4">
              This is so great - you'll see!
              </p>
            </article>
          </div>
        `
        },
        3: {
          title: 'Tool #2: The Magnificence of Movement',
          type: 'tool',
          content: `
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Tool #2: The Magnificence of Movement</h1>
                <h2 class="h3 module__article__title">Body Brilliance</h2>
              </hgroup>
    
              <blockquote class="blockquote serif-stack">
                <p class="serif-stack font-weight-bold">"Take care of your body. It is the only one you have."</p>
                <footer class="blockquote-footer"><cite title="Anonymous">Anonymous</cite></footer>
              </blockquote>
    
              <p class="module__article__text serif-stack mb-4">
              You have a brilliant, magnificent body. A body that shows up for you daily and asks for nothing in return. Take a second to acknowledge all that your body does automatically: your heart beats without you asking, your organs function without any direction, and you breathe in and out without any conscious thought. It is time to give back to your beautiful vessel!
              </p>
              <p class="module__article__text serif-stack mb-4">
              There are a lot of different views when it comes to exercise. Some of us love the thought of a sweaty workout and others are repulsed by this thought. Some of us enjoy yoga and some of us don't have the patience to participate in that type of movement. There is no judgment of right or wrong! However, no matter where you stand, what your level of fitness is or what your body goals are, it is an indisputable fact that your body craves daily movement. 
              </p>
              <p class="module__article__text serif-stack mb-4">
              From walking to running to yoga to weight lifting - all movement is good movement. Being fit doesn't meant that you have to run marathons, participate in a body building competition of even go to the gym. Moving your body by playing with your kids, walking and talking with your girlfriends or watching a youtube video are all great ways to take care of your body.
              </p>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">R (Reflect)</h1>
                <h2 class="h3 module__article__title">Child Play</h2>
              </hgroup>

              <p class="module__article__text serif-stack mb-4">
                Reflecting back on our childhood activities reveals a lot about what brings us joy. We may not want to replicate the same activity but the way we used to move and what we used to find entertaining as a child may be something our adult soul misses today. Take time now to visualize yourself when you were a child. What types of activities did you love to do? Were you active? What movement was fun to you? What brought you joy in terms of movement? Did you swim, play hop scotch, road hockey, run, high jump or something else? Answer the questions in your workbook on page 10 to connect back with what you used to love and what that may indicate for your inner child. 
              </p>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">O (Observe)</h1>
                <h2 class="h3 module__article__title">Video 3: Magnificence of Movement</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              As you watch the video below, record your insights on page 11 of your workbook. There is a surprise at the end of this video - so watch the whole thing!
              </p>
              <div class="player-wrapper mb-4">
                <ReactPlayer
                  url="https://youtu.be/xHIETHvsM7w"
                  width="100%"
                />
              </div>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">A (Act)</h1>
                <h2 class="h3 module__article__title">Get up and MOVE</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              ZUMBA TIME!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Did you really think that we were just going to let you watch the Zumba and not require you to get up and do it?! Not a chance!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Clear some space and move your body right NOW! Replay the video and actually follow along to Andrea's Zumba video. Allow yourself to laugh, sweat and be playful. Do it right now! It doesn't matter what you are wearing...that is no excuse!
              </p>
              <p class="module__article__text serif-stack mb-4">
              How do you incorporate movement into your daily life? What were your takeaways from the tips Andrea shared? Flip to page 12 of your workbook and answer the question to reveal how you relate to body movement, and what challenges and success you have in this area of your life.
              </p>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">D (Decide)</h1>
                <h2 class="h3 module__article__title">Daily Movement</h2>
              </hgroup>

              <p class="module__article__text serif-stack mb-4">
              Schedule a minimum of 5 minutes every day to do some deliberate movement. Follow along to Andrea's video every day if you'd like! Set an alarm on your phone to go off morning, noon and night and move your body just because you have can! Write down on page 13 of your workbook how you will commit to celebrating your body with movement everyday!
              </p>

            </article>
          </div>
        `
        },
        4: {
          title: 'Tool #3: Mindset',
          type: 'tool',
          content: `
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Tool #3: Mindset</h1>
                <h2 class="h3 module__article__title">Mindful Meditation</h2>
              </hgroup>
    
              <blockquote class="blockquote serif-stack">
                <p class="serif-stack font-weight-bold">"Buddha was asked, "What have you gained from meditation?" He replied, "Nothing! However, let me tell you what I've lost: Anger, Anxiety, Depression, and Fear."</p>
                <footer class="blockquote-footer"><cite title="Anonymous">Anonymous</cite></footer>
              </blockquote>
    
              <p class="module__article__text serif-stack mb-4">
              The benefits of meditation are continuously being documented in scientific studies and written about in countless journal articles proving its necessity for a fulfilled life.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Meditation is a powerful practice that allows you to tap into your inner wisdom by allowing you to escape into a relaxed state. Your mind is able to escape from anxiety, worry and stress, and you are able to tend to the demands of your everyday life more effectively.  It has been said, "It is not the musical note that makes the song, it is the silence between the notes". This is the point of meditation. To get into the space between your conflicting thoughts. In other words, it isn't in our thoughts, but in the moments between our thoughts where clarity is found.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Meditation is a practice, which means it takes time, effort and consistency, in order for you to really reap the massive benefits it offers. Think of meditation like a sport. If you want to score more points, you practice every day so that when it comes to game time you automatically take the winning shots.
              </p>
              <p class="module__article__text serif-stack mb-4">
              When you redirect your mind to focus on a mantra or your breath this is like practicing your aim so you can score success during the game. So, when it comes to life events (a stressful situation, anxiety, feelings of depression) you've trained your mind to be so mentally fit you are able to focus back on your breath and enter a relaxed state. The truth about the practice of mediation is that you are really practicing being the master of your own emotions, thoughts and ultimately your life. 
              </p>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">R (Reflect)</h1>
                <h2 class="h3 module__article__title">Spending Time with YOU</h2>
              </hgroup>

              <p class="module__article__text serif-stack mb-4">
              What do you know about meditation? What do the words: Spirituality, Universe, God, Mother Earth, Higher Power, Source - mean to you? What words resonate most with you?
              </p>
              <p class="module__article__text serif-stack mb-4">
              Are you open to practicing this life changing habit of meditation?
              </p>
              <p class="module__article__text serif-stack mb-4">
              Write your thoughts, judgments, fears, excitements and objections in your workbook on page 14.
              </p>
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">O (Observe)</h1>
                <h2 class="h3 module__article__title">Audio 1: Guided Mediation</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              Get into a comfortable position, close your eyes and let go as you listen to this guided meditation by Beyond Balance from Youtube. This is an amazing resource with other videos to explore. If you would like to try other meditation teachers and styles feel free to do your own exploration as well. There is so much available to you out there.
              </p>
              <div class="player-wrapper mb-4">
                <ReactPlayer
                  url="https://youtu.be/utfw-rJUvy4"
                  width="100%"
                />
              </div>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">A (Act)</h1>
                <h2 class="h3 module__article__title">Practice Mindful Meditation</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              Try out the guided mediation one more time if time allows, and then flip to page 16 of your workbook and answer the questions. There are so many ways to meditate, and we encourage you to investigate many different forms to see which one works best for you after the 7 day trial with this one.
              </p>
              <p class="module__article__text serif-stack mb-4">
              You may already be meditating during your Miracle Morning Routine - or you may choose to meditate at another time.  Try both! See what works best for your need
              </p>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">D (Decide)</h1>
                <h2 class="h3 module__article__title">Meditate Daily</h2>
              </hgroup>

              <p class="module__article__text serif-stack mb-4">
              Practice this meditation, or one like it,  for the next 7 days and see how the process feels. Like previously stated, it is a practice. We keep using this word practice for a reason. Practice, practice, practice! Practice means you are learning and improving. Mediation is something you must commit to before you are good at it.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Surrender to the process and allow yourself time to figure it out. You are building your mental fitness with each practice you commit to. You will gain clarity, inner peace, mental strength while reducing challenges, obstacles and difficulties in your life.
              </p>
              <p class="module__article__text serif-stack mb-4">
              You will notice behavioral changes and an elevation of happiness, concentration ability, as well as a deeper connection to your purpose as you make this commitment. It's worth its weight in gold.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Write about how it felt for you after you practice for 10 days on page 17 of your workbook.
              </p>
            </article>
          </div>
        `
        },
        5: {
          title: 'Tool #4: Sleep and Systems for Success',
          type: 'tool',
          content: `
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Tool #4: Sleep and Systems for Success</h1>
                <h2 class="h3 module__article__title">Discipline Equals Freedom</h2>
              </hgroup>
    
              <blockquote class="blockquote serif-stack">
                <p class="serif-stack font-weight-bold">"The most productive day begins the night before."</p>
                <footer class="blockquote-footer"><cite title="Anonymous">Anonymous</cite></footer>
              </blockquote>
    
              <p class="module__article__text serif-stack mb-4">
              As you're already aware from Module 3: My Plan for Me, having consistent daily habits and actions sets you up for success. This lesson requires using your creative power to explore ways in which you can become even more effective, efficient and productive in all areas of your life.
              </p>
              <p class="module__article__text serif-stack mb-4">
              This lesson focuses on building a system of success for sleep.  The quality of your sleep is vital to your health, success and fulfillment. It's really not necessary to get a specific quantity of sleep - the quality of your sleep is the key.
              </p>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">R (Reflect)</h1>
              </hgroup>

              <p class="module__article__text serif-stack mb-4">
              Think of all the areas in your life. Begin by thinking of an area of your life where you are most effective, efficient and productive. Why do you think you are having success in this area? What systems to do you have in place?
              </p>
              <p class="module__article__text serif-stack mb-4">
              Flip to page 18 of your workbook and record what are you doing that helps you with your success in this area. Move on to the next question and think of an area that you are totally thrilled about. Write about what is happening in the next box on page 18.
              </p>
              <p class="module__article__text serif-stack mb-4">
              What do you need in order to have more time for your Big Rocks? Think of systems of success that you could implement.
              </p>
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">O (Observe)</h1>
                <h2 class="h3 module__article__title">Video 4: Systems for Sleep Success!</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              Get into a comfortable position, close your eyes and let go as you listen to this guided meditation by Beyond Balance from Youtube. This is an amazing resource with other videos to explore. If you would like to try other meditation teachers and styles feel free to do your own exploration as well. There is so much available to you out there.
              </p>
              <p class="module__article__text serif-stack mb-4">
              When you have systems for success, you have intentional routines that support your desired goals.  In the video below, listen to how Rachel sets herself up with an effective nighttime routine that allows her to feel energized and poised for her amazing life.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Then, reflect on your own life and fill in the questions on page 19 of your workbook to identify areas in your life you want to improve.
              </p>
              <div class="player-wrapper mb-4">
                <ReactPlayer
                  url="https://youtu.be/3SWkOwVorIo"
                  width="100%"
                />
              </div>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">A (Act)</h1>
                <h2 class="h3 module__article__title">Build Your System for Success</h2>
              </hgroup>
              <p class="module__article__text serif-stack mb-4">
              We are putting it all together. Everything you have learned and experienced during the entire Roadmap course is to be brought into this exercise. Go back through your workbooks for the entire course and then decide on systems for success in at least one area.
              </p>
              <p class="module__article__text serif-stack mb-4">
              Fill out the chart on page 20 for one or more areas. This is your chance to reflect and commit (or re-commit if there is something you committed to earlier in the course but forgot about) by creating a system for success that you are going to do moving forward. Be really clear.
              </p>

              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">D (Decide)</h1>
                <h2 class="h3 module__article__title">Baby Steps</h2>
              </hgroup>

              <p class="module__article__text serif-stack mb-4">
              Your roadmap learning has ended, but your roadmap life course has just began. To make your journey as smooth as possible, create an environment that fosters success. You will experience setbacks and stressful times on the road, so set yourself up with these systems of success.
              </p>
              <p class="module__article__text serif-stack mb-4">
              You now have all you need to make this epic journey. It isn't an overnight achievement, It's a process that will continue for an infinite amount of time.
              </p>
              <p class="module__article__text serif-stack mb-4">
              You will experience highs and lows, and curves and turns.
              </p>
              <p class="module__article__text serif-stack mb-4">
              This is your 1Life Fully Lived story, make it a worthwhile read! Journal one last time, on page 21 of your workbook, all the things that have impacted you on this course, things you are wanting to keep accountable for and the successes you've already had as you journey down the road.
              </p>
              <p class="font-weight-bold module__article__text serif-stack mb-4">
              CONGRATULATIONS!
              YOU HAVE COMPLETED THE MY 1LIFE ROADMAP !
              </p>
              <p class="font-weight-bold module__article__text serif-stack mb-4">
              Please share your thoughts in our Facebook group
              </p>
              <blockquote class="blockquote">
                <p class="font-weight-bold">
                If you have questions about this lesson, contact us at <a href="mailto:info@1lifefullylived.org">info@1lifefullylived.org</a>
                </p>
              </blockquote>
            </article>
          </div>
        `
        },
        6: {
          title: 'Wrap up Module 6',
          type: 'lesson',
          content: `
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Wrap up Module 6</h1>
                <h2 class="h3 module__article__title">WRAP UP!</h2>
              </hgroup>
    
              <div class="player-wrapper mb-4">
                <ReactPlayer
                  url="https://youtu.be/N7eww1UVRk8"
                  width="100%"
                />
              </div>

              <hgroup class="mb-3">
                <h2 class="h3 module__article__title">WHAT ARE YOU GOING TO DO TO CELEBRATE?!
                THIS IS HUGE!</h2>
              </hgroup>
            </article>
          </div>
        `
        },
        7: {
          title: 'Final Thoughts – for now!',
          type: 'lesson',
          content: `
          <div>
            <article class="module__article container mb-5">
              <hgroup class="mb-3">
                <h1 class="h2 module__article__title">Final Thoughts – for now!</h1>
              </hgroup>

              <p class="module__article__text serif-stack">
                Dear Amazing and Passionate You!
              </p>
              <p class="module__article__text serif-stack mb-4">
              Thank you so much for taking this journey with us.  We appreciate you more than you will ever know.  We are actively editing this program based on your feedback and our experience of it and will be launching it "for real" in October at our Sacramento Conference, and online to our community, and beyond!
              </p>
              <p class="module__article__text serif-stack mb-4">            
              As you know, the Roadmap is a class that never really ends. The knowledge and activities you have gained and implemented are life strategies and skills that you will continue to develop during your lifetime. 
              </p>
              <p class="module__article__text serif-stack mb-4">
              Life is a journey, and every journey has turbulence, distractions and challenges, so expect them, and embrace them. Failing is encouraged (!) as this is how you learn and create momentum. If you are not willing to fail then you are not willing to try, and without action nothing changes.
              </p>
              <p class="module__article__text serif-stack mb-4">            
              Finally, you are never alone. If you need support, please reach out.  If you aren't already a member of our main 1Life Facebook Community, make sure you join us there, too.   We are all here in this together. Don’t struggle on your own; don’t be an island - there are SO MANY people on your team!
              </p>
              <p class="module__article__text serif-stack mb-4">            
              We wish you continued happiness and success in life - and encourage you to always pass it on!
              </p>
              <p class="module__article__text serif-stack mb-4">
              With gratitude,
              </p>
              <p class="module__article__text serif-stack mb-4">
              My 1Life Roadmap Team
              </p>
            </article>
          </div>
        `
        }
      }
    }
};

export default modules