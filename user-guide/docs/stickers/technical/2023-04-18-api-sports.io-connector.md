---
title: API-sports.io Connector
description: ""
date: 2023-04-17T23:56:56.469Z
preview: ""
draft: true
tags: []
categories: []
---



```yaml
swagger: '2.0'
info:
  title: 'Statto Stickers '
  description: ''
  version: '1.0'
host: v3.football.api-sports.io
basePath: /
schemes:
  - https
consumes: []
produces: []
paths:
  /fixtures:
    get:
      responses:
        '100':
          description: default
          schema:
            type: object
            properties:
              get:
                type: string
                description: get
              parameters:
                type: object
                properties:
                  ids:
                    type: string
                    description: ids
                description: parameters
              errors:
                type: array
                items: {}
                description: errors
              results:
                type: integer
                format: int32
                description: results
              paging:
                type: object
                properties:
                  current:
                    type: integer
                    format: int32
                    description: current
                  total:
                    type: integer
                    format: int32
                    description: total
                description: paging
              response:
                type: array
                items:
                  type: object
                  properties:
                    fixture:
                      type: object
                      properties:
                        id:
                          type: integer
                          format: int32
                          description: id
                        referee:
                          type: string
                          description: referee
                        timezone:
                          type: string
                          description: timezone
                        date:
                          type: string
                          description: date
                        timestamp:
                          type: integer
                          format: int32
                          description: timestamp
                        periods:
                          type: object
                          properties:
                            first:
                              type: integer
                              format: int32
                              description: first
                            second:
                              type: integer
                              format: int32
                              description: second
                          description: periods
                        venue:
                          type: object
                          properties:
                            id:
                              type: integer
                              format: int32
                              description: id
                            name:
                              type: string
                              description: name
                            city:
                              type: string
                              description: city
                          description: venue
                        status:
                          type: object
                          properties:
                            long:
                              type: string
                              description: long
                            short:
                              type: string
                              description: short
                            elapsed:
                              type: integer
                              format: int32
                              description: elapsed
                          description: status
                      description: fixture
                    league:
                      type: object
                      properties:
                        id:
                          type: integer
                          format: int32
                          description: id
                        name:
                          type: string
                          description: name
                        country:
                          type: string
                          description: country
                        logo:
                          type: string
                          description: logo
                        flag:
                          type: string
                          description: flag
                        season:
                          type: integer
                          format: int32
                          description: season
                        round:
                          type: string
                          description: round
                      description: league
                    teams:
                      type: object
                      properties:
                        home:
                          type: object
                          properties:
                            id:
                              type: integer
                              format: int32
                              description: id
                            name:
                              type: string
                              description: name
                            logo:
                              type: string
                              description: logo
                            winner:
                              type: boolean
                              description: winner
                          description: home
                        away:
                          type: object
                          properties:
                            id:
                              type: integer
                              format: int32
                              description: id
                            name:
                              type: string
                              description: name
                            logo:
                              type: string
                              description: logo
                            winner:
                              type: boolean
                              description: winner
                          description: away
                      description: teams
                    goals:
                      type: object
                      properties:
                        home:
                          type: integer
                          format: int32
                          description: home
                        away:
                          type: integer
                          format: int32
                          description: away
                      description: goals
                    score:
                      type: object
                      properties:
                        halftime:
                          type: object
                          properties:
                            home:
                              type: integer
                              format: int32
                              description: home
                            away:
                              type: integer
                              format: int32
                              description: away
                          description: halftime
                        fulltime:
                          type: object
                          properties:
                            home:
                              type: integer
                              format: int32
                              description: home
                            away:
                              type: integer
                              format: int32
                              description: away
                          description: fulltime
                        extratime:
                          type: object
                          properties:
                            home:
                              type: string
                              description: home
                            away:
                              type: string
                              description: away
                          description: extratime
                        penalty:
                          type: object
                          properties:
                            home:
                              type: string
                              description: home
                            away:
                              type: string
                              description: away
                          description: penalty
                      description: score
                    events:
                      type: array
                      items:
                        type: object
                        properties:
                          time:
                            type: object
                            properties:
                              elapsed:
                                type: integer
                                format: int32
                                description: elapsed
                              extra:
                                type: integer
                                format: int32
                                description: extra
                            description: time
                          team:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              logo:
                                type: string
                                description: logo
                            description: team
                          player:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                            description: player
                          assist:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                            description: assist
                          type:
                            type: string
                            description: type
                          detail:
                            type: string
                            description: detail
                          comments:
                            type: string
                            description: comments
                      description: events
                    lineups:
                      type: array
                      items:
                        type: object
                        properties:
                          team:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              logo:
                                type: string
                                description: logo
                              colors:
                                type: object
                                properties:
                                  player:
                                    type: object
                                    properties:
                                      primary:
                                        type: string
                                        description: primary
                                      number:
                                        type: string
                                        description: number
                                      border:
                                        type: string
                                        description: border
                                    description: player
                                  goalkeeper:
                                    type: object
                                    properties:
                                      primary:
                                        type: string
                                        description: primary
                                      number:
                                        type: string
                                        description: number
                                      border:
                                        type: string
                                        description: border
                                    description: goalkeeper
                                description: colors
                            description: team
                          coach:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              photo:
                                type: string
                                description: photo
                            description: coach
                          formation:
                            type: string
                            description: formation
                          startXI:
                            type: array
                            items:
                              type: object
                              properties:
                                player:
                                  type: object
                                  properties:
                                    id:
                                      type: integer
                                      format: int32
                                      description: id
                                    name:
                                      type: string
                                      description: name
                                    number:
                                      type: integer
                                      format: int32
                                      description: number
                                    pos:
                                      type: string
                                      description: pos
                                    grid:
                                      type: string
                                      description: grid
                                  description: player
                            description: startXI
                          substitutes:
                            type: array
                            items:
                              type: object
                              properties:
                                player:
                                  type: object
                                  properties:
                                    id:
                                      type: integer
                                      format: int32
                                      description: id
                                    name:
                                      type: string
                                      description: name
                                    number:
                                      type: integer
                                      format: int32
                                      description: number
                                    pos:
                                      type: string
                                      description: pos
                                    grid:
                                      type: string
                                      description: grid
                                  description: player
                            description: substitutes
                      description: lineups
                    statistics:
                      type: array
                      items:
                        type: object
                        properties:
                          team:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              logo:
                                type: string
                                description: logo
                            description: team
                          statistics:
                            type: array
                            items:
                              type: object
                              properties:
                                type:
                                  type: string
                                  description: type
                                value:
                                  type: string
                                  description: value
                            description: statistics
                      description: statistics
                    players:
                      type: array
                      items:
                        type: object
                        properties:
                          team:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              logo:
                                type: string
                                description: logo
                              update:
                                type: string
                                description: update
                            description: team
                          players:
                            type: array
                            items:
                              type: object
                              properties:
                                player:
                                  type: object
                                  properties:
                                    id:
                                      type: integer
                                      format: int32
                                      description: id
                                    name:
                                      type: string
                                      description: name
                                    photo:
                                      type: string
                                      description: photo
                                  description: player
                                statistics:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      games:
                                        type: object
                                        properties:
                                          minutes:
                                            type: integer
                                            format: int32
                                            description: minutes
                                          number:
                                            type: integer
                                            format: int32
                                            description: number
                                          position:
                                            type: string
                                            description: position
                                          rating:
                                            type: string
                                            description: rating
                                          captain:
                                            type: boolean
                                            description: captain
                                          substitute:
                                            type: boolean
                                            description: substitute
                                        description: games
                                      offsides:
                                        type: string
                                        description: offsides
                                      shots:
                                        type: object
                                        properties:
                                          total:
                                            type: string
                                            description: total
                                          'on':
                                            type: string
                                            description: 'on'
                                        description: shots
                                      goals:
                                        type: object
                                        properties:
                                          total:
                                            type: string
                                            description: total
                                          conceded:
                                            type: integer
                                            format: int32
                                            description: conceded
                                          assists:
                                            type: string
                                            description: assists
                                          saves:
                                            type: string
                                            description: saves
                                        description: goals
                                      passes:
                                        type: object
                                        properties:
                                          total:
                                            type: integer
                                            format: int32
                                            description: total
                                          key:
                                            type: string
                                            description: key
                                          accuracy:
                                            type: string
                                            description: accuracy
                                        description: passes
                                      tackles:
                                        type: object
                                        properties:
                                          total:
                                            type: string
                                            description: total
                                          blocks:
                                            type: string
                                            description: blocks
                                          interceptions:
                                            type: string
                                            description: interceptions
                                        description: tackles
                                      duels:
                                        type: object
                                        properties:
                                          total:
                                            type: string
                                            description: total
                                          won:
                                            type: string
                                            description: won
                                        description: duels
                                      dribbles:
                                        type: object
                                        properties:
                                          attempts:
                                            type: string
                                            description: attempts
                                          success:
                                            type: string
                                            description: success
                                          past:
                                            type: string
                                            description: past
                                        description: dribbles
                                      fouls:
                                        type: object
                                        properties:
                                          drawn:
                                            type: string
                                            description: drawn
                                          committed:
                                            type: string
                                            description: committed
                                        description: fouls
                                      cards:
                                        type: object
                                        properties:
                                          yellow:
                                            type: integer
                                            format: int32
                                            description: yellow
                                          red:
                                            type: integer
                                            format: int32
                                            description: red
                                        description: cards
                                      penalty:
                                        type: object
                                        properties:
                                          won:
                                            type: string
                                            description: won
                                          commited:
                                            type: string
                                            description: commited
                                          scored:
                                            type: integer
                                            format: int32
                                            description: scored
                                          missed:
                                            type: integer
                                            format: int32
                                            description: missed
                                          saved:
                                            type: string
                                            description: saved
                                        description: penalty
                                  description: statistics
                            description: players
                      description: players
                description: response
        default:
          description: default
          schema:
            type: object
            properties:
              get:
                type: string
                description: get
              parameters:
                type: object
                properties:
                  ids:
                    type: string
                    description: ids
                description: parameters
              errors:
                type: array
                items: {}
                description: errors
              results:
                type: integer
                format: int32
                description: results
              paging:
                type: object
                properties:
                  current:
                    type: integer
                    format: int32
                    description: current
                  total:
                    type: integer
                    format: int32
                    description: total
                description: paging
              response:
                type: array
                items:
                  type: object
                  properties:
                    fixture:
                      type: object
                      properties:
                        id:
                          type: integer
                          format: int32
                          description: id
                        referee:
                          type: string
                          description: referee
                        timezone:
                          type: string
                          description: timezone
                        date:
                          type: string
                          description: date
                        timestamp:
                          type: integer
                          format: int32
                          description: timestamp
                        periods:
                          type: object
                          properties:
                            first:
                              type: integer
                              format: int32
                              description: first
                            second:
                              type: integer
                              format: int32
                              description: second
                          description: periods
                        venue:
                          type: object
                          properties:
                            id:
                              type: integer
                              format: int32
                              description: id
                            name:
                              type: string
                              description: name
                            city:
                              type: string
                              description: city
                          description: venue
                        status:
                          type: object
                          properties:
                            long:
                              type: string
                              description: long
                            short:
                              type: string
                              description: short
                            elapsed:
                              type: integer
                              format: int32
                              description: elapsed
                          description: status
                      description: fixture
                    league:
                      type: object
                      properties:
                        id:
                          type: integer
                          format: int32
                          description: id
                        name:
                          type: string
                          description: name
                        country:
                          type: string
                          description: country
                        logo:
                          type: string
                          description: logo
                        flag:
                          type: string
                          description: flag
                        season:
                          type: integer
                          format: int32
                          description: season
                        round:
                          type: string
                          description: round
                      description: league
                    teams:
                      type: object
                      properties:
                        home:
                          type: object
                          properties:
                            id:
                              type: integer
                              format: int32
                              description: id
                            name:
                              type: string
                              description: name
                            logo:
                              type: string
                              description: logo
                            winner:
                              type: boolean
                              description: winner
                          description: home
                        away:
                          type: object
                          properties:
                            id:
                              type: integer
                              format: int32
                              description: id
                            name:
                              type: string
                              description: name
                            logo:
                              type: string
                              description: logo
                            winner:
                              type: boolean
                              description: winner
                          description: away
                      description: teams
                    goals:
                      type: object
                      properties:
                        home:
                          type: integer
                          format: int32
                          description: home
                        away:
                          type: integer
                          format: int32
                          description: away
                      description: goals
                    score:
                      type: object
                      properties:
                        halftime:
                          type: object
                          properties:
                            home:
                              type: integer
                              format: int32
                              description: home
                            away:
                              type: integer
                              format: int32
                              description: away
                          description: halftime
                        fulltime:
                          type: object
                          properties:
                            home:
                              type: integer
                              format: int32
                              description: home
                            away:
                              type: integer
                              format: int32
                              description: away
                          description: fulltime
                        extratime:
                          type: object
                          properties:
                            home:
                              type: string
                              description: home
                            away:
                              type: string
                              description: away
                          description: extratime
                        penalty:
                          type: object
                          properties:
                            home:
                              type: string
                              description: home
                            away:
                              type: string
                              description: away
                          description: penalty
                      description: score
                    events:
                      type: array
                      items:
                        type: object
                        properties:
                          time:
                            type: object
                            properties:
                              elapsed:
                                type: integer
                                format: int32
                                description: elapsed
                              extra:
                                type: integer
                                format: int32
                                description: extra
                            description: time
                          team:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              logo:
                                type: string
                                description: logo
                            description: team
                          player:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                            description: player
                          assist:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                            description: assist
                          type:
                            type: string
                            description: type
                          detail:
                            type: string
                            description: detail
                          comments:
                            type: string
                            description: comments
                      description: events
                    lineups:
                      type: array
                      items:
                        type: object
                        properties:
                          team:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              logo:
                                type: string
                                description: logo
                              colors:
                                type: object
                                properties:
                                  player:
                                    type: object
                                    properties:
                                      primary:
                                        type: string
                                        description: primary
                                      number:
                                        type: string
                                        description: number
                                      border:
                                        type: string
                                        description: border
                                    description: player
                                  goalkeeper:
                                    type: object
                                    properties:
                                      primary:
                                        type: string
                                        description: primary
                                      number:
                                        type: string
                                        description: number
                                      border:
                                        type: string
                                        description: border
                                    description: goalkeeper
                                description: colors
                            description: team
                          coach:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              photo:
                                type: string
                                description: photo
                            description: coach
                          formation:
                            type: string
                            description: formation
                          startXI:
                            type: array
                            items:
                              type: object
                              properties:
                                player:
                                  type: object
                                  properties:
                                    id:
                                      type: integer
                                      format: int32
                                      description: id
                                    name:
                                      type: string
                                      description: name
                                    number:
                                      type: integer
                                      format: int32
                                      description: number
                                    pos:
                                      type: string
                                      description: pos
                                    grid:
                                      type: string
                                      description: grid
                                  description: player
                            description: startXI
                          substitutes:
                            type: array
                            items:
                              type: object
                              properties:
                                player:
                                  type: object
                                  properties:
                                    id:
                                      type: integer
                                      format: int32
                                      description: id
                                    name:
                                      type: string
                                      description: name
                                    number:
                                      type: integer
                                      format: int32
                                      description: number
                                    pos:
                                      type: string
                                      description: pos
                                    grid:
                                      type: string
                                      description: grid
                                  description: player
                            description: substitutes
                      description: lineups
                    statistics:
                      type: array
                      items:
                        type: object
                        properties:
                          team:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              logo:
                                type: string
                                description: logo
                            description: team
                          statistics:
                            type: array
                            items:
                              type: object
                              properties:
                                type:
                                  type: string
                                  description: type
                                value:
                                  description: value
                                  allOf:
                                    - format: int32
                                      type: integer
                            description: statistics
                      description: statistics
                    players:
                      type: array
                      items:
                        type: object
                        properties:
                          team:
                            type: object
                            properties:
                              id:
                                type: integer
                                format: int32
                                description: id
                              name:
                                type: string
                                description: name
                              logo:
                                type: string
                                description: logo
                              update:
                                type: string
                                description: update
                            description: team
                          players:
                            type: array
                            items:
                              type: object
                              properties:
                                player:
                                  type: object
                                  properties:
                                    id:
                                      type: integer
                                      format: int32
                                      description: id
                                    name:
                                      type: string
                                      description: name
                                    photo:
                                      type: string
                                      description: photo
                                  description: player
                                statistics:
                                  type: array
                                  items:
                                    type: object
                                    properties:
                                      games:
                                        type: object
                                        properties:
                                          minutes:
                                            type: integer
                                            format: int32
                                            description: minutes
                                          number:
                                            type: integer
                                            format: int32
                                            description: number
                                          position:
                                            type: string
                                            description: position
                                          rating:
                                            type: string
                                            description: rating
                                          captain:
                                            type: boolean
                                            description: captain
                                          substitute:
                                            type: boolean
                                            description: substitute
                                        description: games
                                      offsides:
                                        type: string
                                        description: offsides
                                      shots:
                                        type: object
                                        properties:
                                          total:
                                            type: string
                                            description: total
                                          'on':
                                            type: string
                                            description: 'on'
                                        description: shots
                                      goals:
                                        type: object
                                        properties:
                                          total:
                                            type: string
                                            description: total
                                          conceded:
                                            type: integer
                                            format: int32
                                            description: conceded
                                          assists:
                                            type: string
                                            description: assists
                                          saves:
                                            type: string
                                            description: saves
                                        description: goals
                                      passes:
                                        type: object
                                        properties:
                                          total:
                                            type: integer
                                            format: int32
                                            description: total
                                          key:
                                            type: string
                                            description: key
                                          accuracy:
                                            type: string
                                            description: accuracy
                                        description: passes
                                      tackles:
                                        type: object
                                        properties:
                                          total:
                                            type: string
                                            description: total
                                          blocks:
                                            type: string
                                            description: blocks
                                          interceptions:
                                            type: string
                                            description: interceptions
                                        description: tackles
                                      duels:
                                        type: object
                                        properties:
                                          total:
                                            type: string
                                            description: total
                                          won:
                                            type: string
                                            description: won
                                        description: duels
                                      dribbles:
                                        type: object
                                        properties:
                                          attempts:
                                            type: string
                                            description: attempts
                                          success:
                                            type: string
                                            description: success
                                          past:
                                            type: string
                                            description: past
                                        description: dribbles
                                      fouls:
                                        type: object
                                        properties:
                                          drawn:
                                            type: string
                                            description: drawn
                                          committed:
                                            type: string
                                            description: committed
                                        description: fouls
                                      cards:
                                        type: object
                                        properties:
                                          yellow:
                                            type: integer
                                            format: int32
                                            description: yellow
                                          red:
                                            type: integer
                                            format: int32
                                            description: red
                                        description: cards
                                      penalty:
                                        type: object
                                        properties:
                                          won:
                                            type: string
                                            description: won
                                          commited:
                                            type: string
                                            description: commited
                                          scored:
                                            type: integer
                                            format: int32
                                            description: scored
                                          missed:
                                            type: integer
                                            format: int32
                                            description: missed
                                          saved:
                                            type: string
                                            description: saved
                                        description: penalty
                                  description: statistics
                            description: players
                      description: players
                description: response
      summary: GetFixtures
      operationId: GetFixtures
      parameters:
        - name: league
          in: query
          required: false
          type: integer
        - name: season
          in: query
          required: false
          type: integer
        - name: id
          in: query
          required: false
          type: integer
        - name: ids
          in: query
          required: false
          type: string
  /status:
    get:
      responses:
        default:
          description: default
          schema:
            type: object
            properties:
              get:
                type: string
                description: get
              parameters:
                type: array
                items: {}
                description: parameters
              errors:
                type: array
                items: {}
                description: errors
              results:
                type: integer
                format: int32
                description: results
              paging:
                type: object
                properties:
                  current:
                    type: integer
                    format: int32
                    description: current
                  total:
                    type: integer
                    format: int32
                    description: total
                description: paging
              response:
                type: object
                properties:
                  account:
                    type: object
                    properties:
                      firstname:
                        type: string
                        description: firstname
                      lastname:
                        type: string
                        description: lastname
                      email:
                        type: string
                        description: email
                    description: account
                  subscription:
                    type: object
                    properties:
                      plan:
                        type: string
                        description: plan
                      end:
                        type: string
                        description: end
                      active:
                        type: boolean
                        description: active
                    description: subscription
                  requests:
                    type: object
                    properties:
                      current:
                        type: integer
                        format: int32
                        description: current
                      limit_day:
                        type: integer
                        format: int32
                        description: limit_day
                    description: requests
                description: response
      summary: GetStatus
      operationId: GetStatus
      parameters: []
  /teams/statistics:
    get:
      responses:
        default:
          description: default
          schema:
            type: object
            properties:
              get:
                type: string
                description: get
              parameters:
                type: object
                properties:
                  season:
                    type: string
                    description: season
                  league:
                    type: string
                    description: league
                  team:
                    type: string
                    description: team
                description: parameters
              errors:
                type: array
                items: {}
                description: errors
              results:
                type: integer
                format: int32
                description: results
              paging:
                type: object
                properties:
                  current:
                    type: integer
                    format: int32
                    description: current
                  total:
                    type: integer
                    format: int32
                    description: total
                description: paging
              response:
                type: object
                properties:
                  league:
                    type: object
                    properties:
                      id:
                        type: integer
                        format: int32
                        description: id
                      name:
                        type: string
                        description: name
                      country:
                        type: string
                        description: country
                      logo:
                        type: string
                        description: logo
                      flag:
                        type: string
                        description: flag
                      season:
                        type: integer
                        format: int32
                        description: season
                    description: league
                  team:
                    type: object
                    properties:
                      id:
                        type: integer
                        format: int32
                        description: id
                      name:
                        type: string
                        description: name
                      logo:
                        type: string
                        description: logo
                    description: team
                  form:
                    type: string
                    description: form
                  fixtures:
                    type: object
                    properties:
                      played:
                        type: object
                        properties:
                          home:
                            type: integer
                            format: int32
                            description: home
                          away:
                            type: integer
                            format: int32
                            description: away
                          total:
                            type: integer
                            format: int32
                            description: total
                        description: played
                      wins:
                        type: object
                        properties:
                          home:
                            type: integer
                            format: int32
                            description: home
                          away:
                            type: integer
                            format: int32
                            description: away
                          total:
                            type: integer
                            format: int32
                            description: total
                        description: wins
                      draws:
                        type: object
                        properties:
                          home:
                            type: integer
                            format: int32
                            description: home
                          away:
                            type: integer
                            format: int32
                            description: away
                          total:
                            type: integer
                            format: int32
                            description: total
                        description: draws
                      loses:
                        type: object
                        properties:
                          home:
                            type: integer
                            format: int32
                            description: home
                          away:
                            type: integer
                            format: int32
                            description: away
                          total:
                            type: integer
                            format: int32
                            description: total
                        description: loses
                    description: fixtures
                  goals:
                    type: object
                    properties:
                      for:
                        type: object
                        properties:
                          total:
                            type: object
                            properties:
                              home:
                                type: integer
                                format: int32
                                description: home
                              away:
                                type: integer
                                format: int32
                                description: away
                              total:
                                type: integer
                                format: int32
                                description: total
                            description: total
                          average:
                            type: object
                            properties:
                              home:
                                type: string
                                description: home
                              away:
                                type: string
                                description: away
                              total:
                                type: string
                                description: total
                            description: average
                          minute:
                            type: object
                            properties:
                              0-15:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 0-15
                              16-30:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 16-30
                              31-45:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 31-45
                              46-60:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 46-60
                              61-75:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 61-75
                              76-90:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 76-90
                              91-105:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 91-105
                              106-120:
                                type: object
                                properties:
                                  total:
                                    type: string
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 106-120
                            description: minute
                        description: for
                      against:
                        type: object
                        properties:
                          total:
                            type: object
                            properties:
                              home:
                                type: integer
                                format: int32
                                description: home
                              away:
                                type: integer
                                format: int32
                                description: away
                              total:
                                type: integer
                                format: int32
                                description: total
                            description: total
                          average:
                            type: object
                            properties:
                              home:
                                type: string
                                description: home
                              away:
                                type: string
                                description: away
                              total:
                                type: string
                                description: total
                            description: average
                          minute:
                            type: object
                            properties:
                              0-15:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 0-15
                              16-30:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 16-30
                              31-45:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 31-45
                              46-60:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 46-60
                              61-75:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 61-75
                              76-90:
                                type: object
                                properties:
                                  total:
                                    type: integer
                                    format: int32
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 76-90
                              91-105:
                                type: object
                                properties:
                                  total:
                                    type: string
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 91-105
                              106-120:
                                type: object
                                properties:
                                  total:
                                    type: string
                                    description: total
                                  percentage:
                                    type: string
                                    description: percentage
                                description: 106-120
                            description: minute
                        description: against
                    description: goals
                  biggest:
                    type: object
                    properties:
                      streak:
                        type: object
                        properties:
                          wins:
                            type: integer
                            format: int32
                            description: wins
                          draws:
                            type: integer
                            format: int32
                            description: draws
                          loses:
                            type: integer
                            format: int32
                            description: loses
                        description: streak
                      wins:
                        type: object
                        properties:
                          home:
                            type: string
                            description: home
                          away:
                            type: string
                            description: away
                        description: wins
                      loses:
                        type: object
                        properties:
                          home:
                            type: string
                            description: home
                          away:
                            type: string
                            description: away
                        description: loses
                      goals:
                        type: object
                        properties:
                          for:
                            type: object
                            properties:
                              home:
                                type: integer
                                format: int32
                                description: home
                              away:
                                type: integer
                                format: int32
                                description: away
                            description: for
                          against:
                            type: object
                            properties:
                              home:
                                type: integer
                                format: int32
                                description: home
                              away:
                                type: integer
                                format: int32
                                description: away
                            description: against
                        description: goals
                    description: biggest
                  clean_sheet:
                    type: object
                    properties:
                      home:
                        type: integer
                        format: int32
                        description: home
                      away:
                        type: integer
                        format: int32
                        description: away
                      total:
                        type: integer
                        format: int32
                        description: total
                    description: clean_sheet
                  failed_to_score:
                    type: object
                    properties:
                      home:
                        type: integer
                        format: int32
                        description: home
                      away:
                        type: integer
                        format: int32
                        description: away
                      total:
                        type: integer
                        format: int32
                        description: total
                    description: failed_to_score
                  penalty:
                    type: object
                    properties:
                      scored:
                        type: object
                        properties:
                          total:
                            type: integer
                            format: int32
                            description: total
                          percentage:
                            type: string
                            description: percentage
                        description: scored
                      missed:
                        type: object
                        properties:
                          total:
                            type: integer
                            format: int32
                            description: total
                          percentage:
                            type: string
                            description: percentage
                        description: missed
                      total:
                        type: integer
                        format: int32
                        description: total
                    description: penalty
                  lineups:
                    type: array
                    items:
                      type: object
                      properties:
                        formation:
                          type: string
                          description: formation
                        played:
                          type: integer
                          format: int32
                          description: played
                    description: lineups
                  cards:
                    type: object
                    properties:
                      yellow:
                        type: object
                        properties:
                          0-15:
                            type: object
                            properties:
                              total:
                                type: integer
                                format: int32
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 0-15
                          16-30:
                            type: object
                            properties:
                              total:
                                type: integer
                                format: int32
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 16-30
                          31-45:
                            type: object
                            properties:
                              total:
                                type: integer
                                format: int32
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 31-45
                          46-60:
                            type: object
                            properties:
                              total:
                                type: integer
                                format: int32
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 46-60
                          61-75:
                            type: object
                            properties:
                              total:
                                type: integer
                                format: int32
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 61-75
                          76-90:
                            type: object
                            properties:
                              total:
                                type: integer
                                format: int32
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 76-90
                          91-105:
                            type: object
                            properties:
                              total:
                                type: integer
                                format: int32
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 91-105
                          106-120:
                            type: object
                            properties:
                              total:
                                type: string
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 106-120
                        description: yellow
                      red:
                        type: object
                        properties:
                          0-15:
                            type: object
                            properties:
                              total:
                                type: string
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 0-15
                          16-30:
                            type: object
                            properties:
                              total:
                                type: string
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 16-30
                          31-45:
                            type: object
                            properties:
                              total:
                                type: string
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 31-45
                          46-60:
                            type: object
                            properties:
                              total:
                                type: integer
                                format: int32
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 46-60
                          61-75:
                            type: object
                            properties:
                              total:
                                type: string
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 61-75
                          76-90:
                            type: object
                            properties:
                              total:
                                type: string
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 76-90
                          91-105:
                            type: object
                            properties:
                              total:
                                type: string
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 91-105
                          106-120:
                            type: object
                            properties:
                              total:
                                type: string
                                description: total
                              percentage:
                                type: string
                                description: percentage
                            description: 106-120
                        description: red
                    description: cards
                description: response
      summary: GetTeamStatistics
      operationId: GetTeamStatistics
      parameters:
        - name: season
          in: query
          required: false
          type: integer
        - name: league
          in: query
          required: false
          type: integer
        - name: team
          in: query
          required: false
          type: integer
  /standings:
    get:
      responses:
        default:
          description: default
          schema:
            type: object
            properties:
              get:
                type: string
                description: get
              parameters:
                type: object
                properties:
                  season:
                    type: string
                    description: season
                  league:
                    type: string
                    description: league
                description: parameters
              errors:
                type: array
                items: {}
                description: errors
              results:
                type: integer
                format: int32
                description: results
              paging:
                type: object
                properties:
                  current:
                    type: integer
                    format: int32
                    description: current
                  total:
                    type: integer
                    format: int32
                    description: total
                description: paging
              response:
                type: array
                items:
                  type: object
                  properties:
                    league:
                      type: object
                      properties:
                        id:
                          type: integer
                          format: int32
                          description: id
                        name:
                          type: string
                          description: name
                        country:
                          type: string
                          description: country
                        logo:
                          type: string
                          description: logo
                        flag:
                          type: string
                          description: flag
                        season:
                          type: integer
                          format: int32
                          description: season
                        standings:
                          type: array
                          items:
                            type: array
                            items:
                              type: object
                              properties:
                                rank:
                                  type: integer
                                  format: int32
                                  description: rank
                                team:
                                  type: object
                                  properties:
                                    id:
                                      type: integer
                                      format: int32
                                      description: id
                                    name:
                                      type: string
                                      description: name
                                    logo:
                                      type: string
                                      description: logo
                                  description: team
                                points:
                                  type: integer
                                  format: int32
                                  description: points
                                goalsDiff:
                                  type: integer
                                  format: int32
                                  description: goalsDiff
                                group:
                                  type: string
                                  description: group
                                form:
                                  type: string
                                  description: form
                                status:
                                  type: string
                                  description: status
                                description:
                                  type: string
                                  description: description
                                all:
                                  type: object
                                  properties:
                                    played:
                                      type: integer
                                      format: int32
                                      description: played
                                    win:
                                      type: integer
                                      format: int32
                                      description: win
                                    draw:
                                      type: integer
                                      format: int32
                                      description: draw
                                    lose:
                                      type: integer
                                      format: int32
                                      description: lose
                                    goals:
                                      type: object
                                      properties:
                                        for:
                                          type: integer
                                          format: int32
                                          description: for
                                        against:
                                          type: integer
                                          format: int32
                                          description: against
                                      description: goals
                                  description: all
                                home:
                                  type: object
                                  properties:
                                    played:
                                      type: integer
                                      format: int32
                                      description: played
                                    win:
                                      type: integer
                                      format: int32
                                      description: win
                                    draw:
                                      type: integer
                                      format: int32
                                      description: draw
                                    lose:
                                      type: integer
                                      format: int32
                                      description: lose
                                    goals:
                                      type: object
                                      properties:
                                        for:
                                          type: integer
                                          format: int32
                                          description: for
                                        against:
                                          type: integer
                                          format: int32
                                          description: against
                                      description: goals
                                  description: home
                                away:
                                  type: object
                                  properties:
                                    played:
                                      type: integer
                                      format: int32
                                      description: played
                                    win:
                                      type: integer
                                      format: int32
                                      description: win
                                    draw:
                                      type: integer
                                      format: int32
                                      description: draw
                                    lose:
                                      type: integer
                                      format: int32
                                      description: lose
                                    goals:
                                      type: object
                                      properties:
                                        for:
                                          type: integer
                                          format: int32
                                          description: for
                                        against:
                                          type: integer
                                          format: int32
                                          description: against
                                      description: goals
                                  description: away
                                update:
                                  type: string
                                  description: update
                          description: standings
                      description: league
                description: response
      summary: GetStandings
      operationId: GetStandings
      parameters:
        - name: season
          in: query
          required: false
          type: integer
        - name: league
          in: query
          required: false
          type: integer
definitions: {}
parameters: {}
responses: {}
securityDefinitions:
  API Key:
    type: apiKey
    in: header
    name: x-apisports-key
security:
  - API Key: []
tags: []

```