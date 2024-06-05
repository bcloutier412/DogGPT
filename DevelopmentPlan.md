<h1>[DOG APP NAME (to be determined)] Development Plan</h1>

<h2>Project Goal:</h2>
  <p>
    Develop an application that aids and streamlines the communication processes between self-employed dog walkers and dog owners resulting in higher rehire rates and larger profit margins.
  </p>

<h2>Project Deliverables and Objective:</h2>
  <ol>
    <li>
    A mobile application utilizing OpenAI GPT API to aid in writing end of walk summaries and basic communication between the dog walker and pet parent.
    </li>
    <li>
    A styled hub to see on-walk information and a post walk card that collectively shows a summary of the walk.
    </li>
  </ol>

<h2>Work Breakdown Structure:</h2>
  <h4>MVC Structure</h4>
  <ul>
    <li>
      Model:
      <ul>
        <li>
          MongoDB
        </li>
      </ul>
    </li>
    <li>
      View: 
      <ul>
        <li>
          React Native -> React Native for Web
        </li>
      </ul>
    </li>
    <li>
      Controller:
        <ul>
          <li>
            Framework/Structure -> Express.js
          </li>
          <li>
            OpenAI GPT API
          </li>
          <li>
            Auth -> Passport.js
          </li>
          <li>
            Testing -> jest/supertest
          </li>
        </ul>
    </li>
  </ul>

<h2>Resource Cost Breakdown</h2>
  <ul>
    <li>
      $10 Allocated to OpenAI GPT API
    </li>
  </ul>

<h2>
  Links
</h2>
  <ul>
    <li>
      OpenAI API:
      <ul>
        <li>
          [Text Generation Guide](https://platform.openai.com/docs/guides/text-generation)
        </li>
        <li>
          [Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
        </li>
      </ul>
    </li>
  </ul>

<h2>Mini Sprints</h2>
  <ol>
    <li>
      <b>Build Basic Data Collecting model to serve to GPT tuning [x]</b>
      <ul>
        <li>
          Basic Google Form [x]
        </li>
      </ul>
    </li>
    <li>
      <b>Basic Model tuning for GPT [ ]</b>
      <ul>
        <li>
          Learn how to fine tune GPT model [x]
        </li>
        <li>
          Create training dataset from pre-written summaries [x]
        </li>
        <li>
          Test model [x]
        </li>
        <li>
          Real World Test [ ]
        </li>
        <li>
          <b>Target Date:</b> Wed 06/05/2024
        </li>
      </ul>
    </li>
    <li>
      <b>Backend with login/logout Routes [ ]</b>
      <ul>
        <li>
          Setup project file structure [x]
          <ul>
            <li>
              index.js [x]
            </li>
            <li>
              app.js [x]
            </li>
            <li>
              utils/middleware/loggers [x]
            </li>
            <li>
              config.js [x]
            </li>
          </ul>
        </li>
        <li>
              Connect to database [x]
            </li>
            <li>
              Passport structure [ ]
            </li>
            <li>
              User Models [ ]
            </li>
            <li>
              Login Routes [ ]
            </li>
            <li>
              Logout Routes [ ]
            </li>
            <li>
              Test with .rest [ ]
            </li>
            <li>
              Test with Jest/supertest [ ]
            </li>
        <li>
          <b>Target Date:</b> Wed 06/12/2024
        </li>
      </ul>
    </li>
    <li>
      <b>Simple user model structure [ ]</b>
      <ul>
        <li>
        </li>
        <li>
          Target Date: Wed 06/14/2024
        </li>
      </ul>
    </li>
    <li>
      <b>Initial login/logout for frontend [ ]</b>
    </li>
    <li>
      <b>Frontend dog profile page [ ]</b>
    </li>
  </ol>