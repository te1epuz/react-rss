function cov_56efibrba() {
  var path = "D:\\RSS\\react-rss\\src\\mocks\\handlers.ts";
  var hash = "fe3dc0c2b36cb80540a743d540a9503a5a4ef2be";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\RSS\\react-rss\\src\\mocks\\handlers.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 24
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 40,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 56
          },
          end: {
            line: 4,
            column: 57
          }
        },
        loc: {
          start: {
            line: 4,
            column: 75
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fe3dc0c2b36cb80540a743d540a9503a5a4ef2be"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_56efibrba = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_56efibrba();
import { rest } from 'msw';
export const handlers = (cov_56efibrba().s[0]++, [rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
  cov_56efibrba().f[0]++;
  cov_56efibrba().s[1]++;
  return res(ctx.status(200), ctx.json({
    info: {
      count: 826,
      pages: 42,
      next: 'https://rickandmortyapi.com/api/character/?page=2',
      prev: null
    },
    results: [{
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/1'
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20'
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z'
    }]
  }));
})]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfNTZlZmlicmJhIiwiYWN0dWFsQ292ZXJhZ2UiLCJyZXN0IiwiaGFuZGxlcnMiLCJzIiwiZ2V0IiwicmVxIiwicmVzIiwiY3R4IiwiZiIsInN0YXR1cyIsImpzb24iLCJpbmZvIiwiY291bnQiLCJwYWdlcyIsIm5leHQiLCJwcmV2IiwicmVzdWx0cyIsImlkIiwibmFtZSIsInNwZWNpZXMiLCJ0eXBlIiwiZ2VuZGVyIiwib3JpZ2luIiwidXJsIiwibG9jYXRpb24iLCJpbWFnZSIsImVwaXNvZGUiLCJjcmVhdGVkIl0sInNvdXJjZXMiOlsiaGFuZGxlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzdCB9IGZyb20gJ21zdyc7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlcnMgPSBbXHJcbiAgcmVzdC5nZXQoJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyJywgKHJlcSwgcmVzLCBjdHgpID0+IHtcclxuICAgIHJldHVybiByZXMoXHJcbiAgICAgIGN0eC5zdGF0dXMoMjAwKSxcclxuICAgICAgY3R4Lmpzb24oe1xyXG4gICAgICAgIGluZm86IHtcclxuICAgICAgICAgIGNvdW50OiA4MjYsXHJcbiAgICAgICAgICBwYWdlczogNDIsXHJcbiAgICAgICAgICBuZXh0OiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvP3BhZ2U9MicsXHJcbiAgICAgICAgICBwcmV2OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzdWx0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogJ1JpY2sgU2FuY2hleicsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ0FsaXZlJyxcclxuICAgICAgICAgICAgc3BlY2llczogJ0h1bWFuJyxcclxuICAgICAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgICAgIGdlbmRlcjogJ01hbGUnLFxyXG4gICAgICAgICAgICBvcmlnaW46IHtcclxuICAgICAgICAgICAgICBuYW1lOiAnRWFydGgnLFxyXG4gICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ0VhcnRoJyxcclxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMS5qcGVnJyxcclxuICAgICAgICAgICAgZXBpc29kZTogW1xyXG4gICAgICAgICAgICAgICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMScsXHJcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMScsXHJcbiAgICAgICAgICAgIGNyZWF0ZWQ6ICcyMDE3LTExLTA0VDE4OjQ4OjQ2LjI1MFonLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9KSxcclxuXTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLFNBQVNFLElBQUksUUFBUSxLQUFLO0FBRTFCLE9BQU8sTUFBTUMsUUFBUSxJQUFBSCxhQUFBLEdBQUFJLENBQUEsT0FBRyxDQUN0QkYsSUFBSSxDQUFDRyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsS0FBSztFQUFBUixhQUFBLEdBQUFTLENBQUE7RUFBQVQsYUFBQSxHQUFBSSxDQUFBO0VBQ3ZFLE9BQU9HLEdBQUcsQ0FDUkMsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQ2ZGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDO0lBQ1BDLElBQUksRUFBRTtNQUNKQyxLQUFLLEVBQUUsR0FBRztNQUNWQyxLQUFLLEVBQUUsRUFBRTtNQUNUQyxJQUFJLEVBQUUsbURBQW1EO01BQ3pEQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQ0RDLE9BQU8sRUFBRSxDQUNQO01BQ0VDLEVBQUUsRUFBRSxDQUFDO01BQ0xDLElBQUksRUFBRSxjQUFjO01BQ3BCVCxNQUFNLEVBQUUsT0FBTztNQUNmVSxPQUFPLEVBQUUsT0FBTztNQUNoQkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsTUFBTSxFQUFFO1FBQ05KLElBQUksRUFBRSxPQUFPO1FBQ2JLLEdBQUcsRUFBRTtNQUNQLENBQUM7TUFDREMsUUFBUSxFQUFFO1FBQ1JOLElBQUksRUFBRSxPQUFPO1FBQ2JLLEdBQUcsRUFBRTtNQUNQLENBQUM7TUFDREUsS0FBSyxFQUFFLHlEQUF5RDtNQUNoRUMsT0FBTyxFQUFFLENBQ1AsMkNBQTJDLEVBQzNDLDJDQUEyQyxDQUM1QztNQUNESCxHQUFHLEVBQUUsNkNBQTZDO01BQ2xESSxPQUFPLEVBQUU7SUFDWCxDQUFDO0VBRUwsQ0FBQyxDQUFDLENBQ0g7QUFDSCxDQUFDLENBQUMsQ0FDSCJ9