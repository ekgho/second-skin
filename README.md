# second-skin
Second Skin project

## Secondary option: Ruby + Sinatra

This repository is primarily a static HTML/CSS/JS project, but a Ruby implementation is also supported as a secondary option for backend handling.

### Ruby example

A minimal Ruby version using Sinatra can handle report submission and return a case number.

```bash
cd ruby
bundle install
bundle exec ruby app.rb
```

Then open http://localhost:4567/ in a browser.

### Files

- `ruby/Gemfile`
- `ruby/app.rb`
- `ruby/views/index.erb`
- `ruby/views/receipt.erb`

This keeps the existing static frontend intact while offering a server-side alternative for future features like secure storage, validation, and record management.
