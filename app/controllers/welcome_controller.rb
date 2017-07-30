class WelcomeController < ApplicationController
  def index
    # some data to help design the templates
    @team = [
      {
        name: 'Ma Li',
        title: 'artist',
        web_link: 'http://www.malimalimali.com',
        bio: "Proin vulputate, nisi eget rhoncus faucibus, justo est sagittis turpis, at tincidunt erat magna nec sem. Duis rhoncus commodo faucibus. Curabitur laoreet magna a fringilla auctor. Aliquam erat volutpat. Pellentesque lorem orci, elementum eu ullamcorper in, molestie at urna. Praesent et risus vitae orci elementum elementum ut sit amet tortor. Vestibulum dignissim neque ac lorem finibus, et condimentum dolor tempus. Morbi eu arcu viverra, pharetra lacus in, molestie sapien. Aenean sapien libero, porttitor ac nisl non, consectetur pulvinar sem. Morbi a commodo justo. Ut imperdiet velit vitae sem faucibus, sit amet gravida urna elementum. In lacinia enim vel ante ultricies, vitae ullamcorper ante dictum. Cras convallis sit amet eros placerat sodales. Praesent semper, neque ac venenatis tempor, sem massa pellentesque metus, ut placerat nulla metus nec ipsum. Maecenas venenatis finibus sagittis"
      },
      {
        name: 'Mee Shell',
        title: 'video dude',
        web_link: 'http://www.meeshell.com',
        bio: "Proin vulputate, nisi eget rhoncus faucibus, justo est sagittis turpis, at tincidunt erat magna nec sem. Duis rhoncus commodo faucibus. Curabitur laoreet magna a fringilla auctor. Aliquam erat volutpat. Pellentesque lorem orci, elementum eu ullamcorper in, molestie at urna. Praesent et risus vitae orci elementum elementum ut sit amet tortor. Vestibulum dignissim neque ac lorem finibus, et condimentum dolor tempus. Morbi eu arcu viverra, pharetra lacus in, molestie sapien. Aenean sapien libero, porttitor ac nisl non, consectetur pulvinar sem. Morbi a commodo justo. Ut imperdiet velit vitae sem faucibus, sit amet gravida urna elementum. In lacinia enim vel ante ultricies, vitae ullamcorper ante dictum. Cras convallis sit amet eros placerat sodales. Praesent semper, neque ac venenatis tempor, sem massa pellentesque metus, ut placerat nulla metus nec ipsum. Maecenas venenatis finibus sagittis"
      }
    ]

    @performance = [
      {
        name: 'Ma Li',
        title: 'artist',
        web_link: 'http://www.malimalimali.com',
        bio: "Proin vulputate, nisi eget rhoncus faucibus, justo est sagittis turpis, at tincidunt erat magna nec sem. Duis rhoncus commodo faucibus. Curabitur laoreet magna a fringilla auctor. Aliquam erat volutpat. Pellentesque lorem orci, elementum eu ullamcorper in, molestie at urna. Praesent et risus vitae orci elementum elementum ut sit amet tortor. Vestibulum dignissim neque ac lorem finibus, et condimentum dolor tempus. Morbi eu arcu viverra, pharetra lacus in, molestie sapien. Aenean sapien libero, porttitor ac nisl non, consectetur pulvinar sem. Morbi a commodo justo. Ut imperdiet velit vitae sem faucibus, sit amet gravida urna elementum. In lacinia enim vel ante ultricies, vitae ullamcorper ante dictum. Cras convallis sit amet eros placerat sodales. Praesent semper, neque ac venenatis tempor, sem massa pellentesque metus, ut placerat nulla metus nec ipsum. Maecenas venenatis finibus sagittis"
      },
      {
        name: 'Mee Shell',
        title: 'video dude',
        web_link: 'http://www.meeshell.com',
        bio: "Proin vulputate, nisi eget rhoncus faucibus, justo est sagittis turpis, at tincidunt erat magna nec sem. Duis rhoncus commodo faucibus. Curabitur laoreet magna a fringilla auctor. Aliquam erat volutpat. Pellentesque lorem orci, elementum eu ullamcorper in, molestie at urna. Praesent et risus vitae orci elementum elementum ut sit amet tortor. Vestibulum dignissim neque ac lorem finibus, et condimentum dolor tempus. Morbi eu arcu viverra, pharetra lacus in, molestie sapien. Aenean sapien libero, porttitor ac nisl non, consectetur pulvinar sem. Morbi a commodo justo. Ut imperdiet velit vitae sem faucibus, sit amet gravida urna elementum. In lacinia enim vel ante ultricies, vitae ullamcorper ante dictum. Cras convallis sit amet eros placerat sodales. Praesent semper, neque ac venenatis tempor, sem massa pellentesque metus, ut placerat nulla metus nec ipsum. Maecenas venenatis finibus sagittis"
      }
    ]

    @music = [
      {
        name: 'Ma Li',
        title: 'artist',
        web_link: 'http://www.malimalimali.com',
        bio: "Proin vulputate, nisi eget rhoncus faucibus, justo est sagittis turpis, at tincidunt erat magna nec sem. Duis rhoncus commodo faucibus. Curabitur laoreet magna a fringilla auctor. Aliquam erat volutpat. Pellentesque lorem orci, elementum eu ullamcorper in, molestie at urna. Praesent et risus vitae orci elementum elementum ut sit amet tortor. Vestibulum dignissim neque ac lorem finibus, et condimentum dolor tempus. Morbi eu arcu viverra, pharetra lacus in, molestie sapien. Aenean sapien libero, porttitor ac nisl non, consectetur pulvinar sem. Morbi a commodo justo. Ut imperdiet velit vitae sem faucibus, sit amet gravida urna elementum. In lacinia enim vel ante ultricies, vitae ullamcorper ante dictum. Cras convallis sit amet eros placerat sodales. Praesent semper, neque ac venenatis tempor, sem massa pellentesque metus, ut placerat nulla metus nec ipsum. Maecenas venenatis finibus sagittis"
      },
      {
        name: 'Mee Shell',
        title: 'video dude',
        web_link: 'http://www.meeshell.com',
        bio: "Proin vulputate, nisi eget rhoncus faucibus, justo est sagittis turpis, at tincidunt erat magna nec sem. Duis rhoncus commodo faucibus. Curabitur laoreet magna a fringilla auctor. Aliquam erat volutpat. Pellentesque lorem orci, elementum eu ullamcorper in, molestie at urna. Praesent et risus vitae orci elementum elementum ut sit amet tortor. Vestibulum dignissim neque ac lorem finibus, et condimentum dolor tempus. Morbi eu arcu viverra, pharetra lacus in, molestie sapien. Aenean sapien libero, porttitor ac nisl non, consectetur pulvinar sem. Morbi a commodo justo. Ut imperdiet velit vitae sem faucibus, sit amet gravida urna elementum. In lacinia enim vel ante ultricies, vitae ullamcorper ante dictum. Cras convallis sit amet eros placerat sodales. Praesent semper, neque ac venenatis tempor, sem massa pellentesque metus, ut placerat nulla metus nec ipsum. Maecenas venenatis finibus sagittis"
      }
    ]
  end
end
