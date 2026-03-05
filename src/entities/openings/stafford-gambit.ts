import { Opening } from './types'

export const staffordGambit: Opening = {
  firstMove: 'e4',
  name: 'Stafford Gambit',
  description: [
    'First paragraph of description.',
    'Second paragraph of description.',
  ],
  tree: {
    san: 'e5',
    comment: ['TODO: Comment this move 1'],
    replies: {
      Nf3: {
        san: 'Nf6',
        comment: ['TODO: Comment this move 2'],
        replies: {
          Nxe5: {
            san: 'Nc6',
            comment: ['TODO: Comment this move 3'],
            replies: {
              Nxc6: {
                san: 'dxc6',
                comment: ['TODO: Comment this move 4'],
                replies: {
                  d3: {
                    san: 'Bc5',
                    comment: ['TODO: Comment this move 5'],
                    replies: {
                      Bg5: {
                        san: 'Nxe4',
                        comment: ['TODO: Comment this move 6'],
                        replies: {
                          Bxd8: {
                            san: 'Bxf2+',
                            comment: ['TODO: Comment this move 7'],
                            replies: {
                              Ke2: {
                                san: 'Bg4#',
                                name: 'TODO: Name this line',
                                comment: ['TODO: Comment this move 8'],
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  e5: {
                    san: 'Ne4',
                    comment: ['TODO: Comment this move 9'],
                    replies: {
                      d4: {
                        san: 'Qh4',
                        comment: ['TODO: Comment this move 10'],
                        replies: {
                          g3: {
                            san: 'Nxg3',
                            comment: ['TODO: Comment this move 11'],
                            replies: {
                              fxg3: {
                                san: 'Qe4+',
                                comment: ['TODO: Comment this move 12'],
                                replies: {
                                  Qe2: {
                                    san: 'Qxh1',
                                    name: 'TODO: Name this line 13',
                                    comment: ['TODO: Comment this move 14'],
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}
