import { Opening } from './types'

export const evansGambit: Opening = {
  firstMove: null,
  name: 'Evans Gambit',
  description: [
    'First paragraph of description.',
    'Second paragraph of description.',
  ],
  tree: {
    san: 'e4',
    comment: ['TODO: Comment this move 1'],
    replies: {
      e5: {
        san: 'Nf3',
        comment: ['TODO: Comment this move 2'],
        replies: {
          Nc6: {
            san: 'Bc4',
            comment: ['TODO: Comment this move 3'],
            replies: {
              Bc5: {
                san: 'b4',
                comment: ['TODO: Comment this move 4'],
                replies: {
                  Bxb4: {
                    san: 'c3',
                    comment: ['TODO: Comment this move 5'],
                    replies: {
                      Bc5: {
                        san: 'd4',
                        comment: ['TODO: Comment this move 6'],
                        replies: {
                          exd4: {
                            san: 'O-O',
                            comment: ['TODO: Comment this move 7'],
                            replies: {
                              dxc3: {
                                san: 'Bxf7+',
                                comment: ['TODO: Comment this move 8'],
                                replies: {
                                  Kxf7: {
                                    san: 'Qd5+',
                                    comment: ['TODO: Comment this move 9'],
                                    replies: {
                                      Kf8: {
                                        san: 'Qxc5+',
                                        comment: ['TODO: Comment this move 10'],
                                        replies: {
                                          d6: {
                                            san: 'Qxc3',
                                            comment: [
                                              'TODO: Comment this move 11',
                                            ],
                                            replies: {
                                              Nf6: {
                                                san: 'Nbd2',
                                                comment: [
                                                  'TODO: Comment this move 12',
                                                ],
                                                replies: {
                                                  Bg4: {
                                                    san: 'Ba3',
                                                    name: 'TODO: Name this line 13',
                                                    comment: [
                                                      'TODO: Comment this move 14',
                                                    ],
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      Ke8: {
                                        san: 'Qxc5',
                                        comment: ['TODO: Comment this move 15'],
                                        replies: {
                                          Nf6: {
                                            san: 'Nxc3',
                                            comment: [
                                              'TODO: Comment this move 16',
                                            ],
                                            replies: {
                                              d6: {
                                                san: 'Qc4',
                                                comment: [
                                                  'TODO: Comment this move 17',
                                                ],
                                                replies: {
                                                  Qe7: {
                                                    san: 'Nd5',
                                                    comment: [
                                                      'TODO: Comment this move 18',
                                                    ],
                                                    replies: {
                                                      Nxd5: {
                                                        san: 'exd5',
                                                        comment: [
                                                          'TODO: Comment this move 19',
                                                        ],
                                                        replies: {
                                                          Ne5: {
                                                            san: 'Nxe5',
                                                            comment: [
                                                              'TODO: Comment this move 20',
                                                            ],
                                                            replies: {
                                                              dxe5: {
                                                                san: 'Re1',
                                                                name: 'TODO: Name this line 21',
                                                                comment: [
                                                                  'TODO: Comment this move 22',
                                                                ],
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
                                          d6: {
                                            san: 'Qxc3',
                                            comment: [
                                              'TODO: Comment this move 23',
                                            ],
                                            replies: {
                                              Nf6: {
                                                san: 'Re1',
                                                comment: [
                                                  'TODO: Comment this move 24',
                                                ],
                                                replies: {
                                                  Bg4: {
                                                    san: 'e5',
                                                    comment: [
                                                      'TODO: Comment this move 25',
                                                    ],
                                                    replies: {
                                                      dxe5: {
                                                        san: 'Nxe5',
                                                        comment: [
                                                          'TODO: Comment this move 26',
                                                        ],
                                                        replies: {
                                                          Nxe5: {
                                                            san: 'Rxe5+',
                                                            comment: [
                                                              'TODO: Comment this move 27',
                                                            ],
                                                            replies: {
                                                              Kf7: {
                                                                san: 'Qb3+',
                                                                comment: [
                                                                  'TODO: Comment this move 28',
                                                                ],
                                                                replies: {
                                                                  Kg6: {
                                                                    san: 'Rg5+',
                                                                    comment: [
                                                                      'TODO: Comment this move 29',
                                                                    ],
                                                                    replies: {
                                                                      Kh6: {
                                                                        san: 'Rxg4+',
                                                                        comment:
                                                                          [
                                                                            'TODO: Comment this move 4645',
                                                                          ],
                                                                        replies:
                                                                          {
                                                                            Kh5: {
                                                                              san: 'Qh3#',
                                                                              name: 'TODO: Name this line 30',
                                                                              comment:
                                                                                [
                                                                                  'TODO: Comment this move 11101',
                                                                                ],
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
      },
    },
  },
}
